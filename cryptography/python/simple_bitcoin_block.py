from hashlib import sha256
import rsa
import json
from random import randint
import binascii
from pprint import pprint

"""
what to do
1. make 3 signed transaction
2. create a merkle root
3. hash the header, not the whole block
4. set a target difficulty (not in hex) and mine it

there are 2 important things to keep in mind
- the metadata of the block
- the data of the transaction

it doesn't need to inlcude everything
your goal is to make cool block using the merkle tree
"""

def edit_json(msg, attr, attr_data):
    new_data = json.loads(msg.decode())
    new_data[attr] = attr_data
    new_json_data = json.dumps(new_data)
    return str.encode(new_json_data)

def gen_key_list(amount):
    # key_dict = {}
    key_list = []
    
    for i in range(amount):
        key_dict = {}
        (pub, priv) = rsa.newkeys(512)
        key_dict['public'] = pub
        key_dict['private'] = priv

        key_list.append(key_dict) 

    return key_list

def get_hex(key):
    # export the key to DER format
    der = key.save_pkcs1('DER')
    
    # since DER is a binary, it can be translated
    # to hex using hexlify
    hex = binascii.hexlify(der)    
    # print(public_hex.decode())
    return hex.decode()

keys = gen_key_list(3)

# ===== make the transaction =====
"""
key 0 -> key 1 x amount
key 1 -> key 2 x amount
key 2 -> key 0 x amount
"""
transaction_list = []
for i in range(len(keys)):
    data = {}
    sender_public = keys[i]['public']
    sender_private = keys[i]['private']
    try:
        receiver_public = keys[i+1]['public']
    except IndexError:
        receiver_public = keys[0]['public']

    data['sender'] = get_hex(sender_public)
    data['receiver'] = get_hex(receiver_public)
    data['amount'] = randint(1, 5)

    # sign the transaction
    temp_message = json.dumps(data).encode()
    signature = rsa.sign(temp_message, sender_private, 'SHA-256')
    data['signature'] = binascii.hexlify(signature).decode()

    transaction_list.append(data)

# ===== find merkle root =====
# if the transaction is odd, then duplicate the last index
"""
the reason you use merkle root is to proove that a transaction is
present on the block without checking one by one, i actually need
to read more about this
"""

total_length = len(transaction_list)
if total_length % 2 != 0:
    transaction_list.append(transaction_list[-1])
# print(transaction_list)

# change name to make it understandable
hash_list = transaction_list
if len(hash_list) == 0:
    # return error or some shit
    pass
elif len(hash_list) == 2:
    # hash that one transaction
    pass
else:
    while len(hash_list) != 1:
        # every iteration starts with empty temp list
        # that will be filled with the combination of the current
        # hash list
        temp_list = []
        for i in range(0, len(hash_list), 2):
            # combine the hash here
            json_tx1 = json.dumps(hash_list[i])
            tx1 = json_tx1.encode()

            json_tx2 = json.dumps(hash_list[i+1])
            tx2 = json_tx2.encode()

            """
            for some reason, the bitcoin protocol requires the transactions to be 
            hashed twice, the digest here is a function that returns the 
            binary of the hash
            """
            hash1 = sha256(sha256(tx1).digest()).digest()
            hash2 = sha256(sha256(tx2).digest()).digest()

            parent_hash = sha256(sha256(hash1 + hash2).digest()).hexdigest()
            temp_list.append(parent_hash)

        # the temp list is a list of calculated parent hashes
        # put it in the main hash list so it can be processed next
        hash_list = temp_list

    root_merkle_hash = hash_list[0]

# ===== make block ======
block = {}
block['header'] = { 
    'merkle_root': root_merkle_hash, 
    'nonce': 0,
    # the target is just a random hex that starts with three 0s converted to int
    'target': 15802950234683020252676755972449664373407456225394263496399282190354680851
    }
block['transaction'] = transaction_list

# ===== mine ======
# the hash result is hex, turn it into a int first
# int(sha.hexdigest(), 16) -> you can do it like this
while True:
    target = block['header']['target']
    nonce = block['header']['nonce']

    block_msg = json.dumps(block['header']).encode()
    # lmao for some reason when I do it manually it doesn't work
    header_hash = sha256(sha256(block_msg).digest()).hexdigest()
    # print(header_hash)    

    hash_int = int(header_hash, 16)
    if hash_int < target:
        print('nonce is: ', nonce)
        print(sha256(block_msg).digest())
        print(header_hash)
        break
    else:
        block['header']['nonce'] += 1

# print(block)