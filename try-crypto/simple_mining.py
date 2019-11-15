import hashlib
import rsa # easier to use IMO for rsa stuff rather than cryptography lib
import binascii
import json
import hashlib

# edit the json data from raw bytes data
def edit_json(msg, attr, attr_data):
    new_data = json.loads(msg.decode())
    new_data[attr] = attr_data
    new_json_data = json.dumps(new_data)
    return str.encode(new_json_data)

# Immutability in the bitcoin block
"""
One of the thing that makes the bitcoin network immutable is because of this private-public key pair.
If you manipulate the transaction and re-mine the block, the block is still invalid because the maliciously
changed transaction isn't signed by the owner of the private key. Let's see an example
"""
# ===== generating key =====
# Tip: it's easier when you can visually see the public and private key in hex format!
(alice_pub, alice_priv) = rsa.newkeys(512)
(bob_pub, bob_priv) = rsa.newkeys(512)

# ===== create transaction =====
# message = b'alice -> bob 0.1 btc'
# this is really stupid way to represent the data, it's way better to
# represent it in json format so you can access it later on
data = {}
data['sender'] = 'alice'
data['receiver'] = 'bob'
data['amount'] = 0.1
json_data = json.dumps(data)
message = str.encode(json_data)

# ===== approving the transaction from the sender =====
# alice approves the message (she really sent 0.1 btc to bob)
# so she signs it
alice_signature = rsa.sign(message, alice_priv, 'SHA-256')

# hex is just a human readable format, uncomment the second print statement
# to see how it looks like
alice_hex_signature = binascii.hexlify(alice_signature).decode()
# print(alice_hex_signature)

# ===== (optional) verification =====
# to verify that alice really send the btc, we can verify it
rsa.verify(message, alice_signature, alice_pub)

# ===== adding signature =====
# now, let's try and put the information to the block
# to do that, we need to add the signature property to the json
# and it will represent a block
signed_message = edit_json(message, 'signature', alice_hex_signature)
# print(signed_message)

# ===== find the nonce =====
"""
in the proof of work algorithm, the network needs to agree on the
transaction, and to do that they "mine" the block. What mining basically
is is they hash the block and find a "special number" that produces the
hash that starts with numbers of 0 (depending on the difficulty)
"""
def mine(msg, difficulty):
    zero_difficulty = difficulty * '0'
    # json_data = nonce + data -> then you hash this
    nonce = 0
    new_block = edit_json(msg, 'nonce', nonce)

    while True:
        sha = hashlib.sha256()
        sha.update(new_block)
        # sha.update(message.encode())
        hash_result = sha.hexdigest()
        print(hash_result)
        if hash_result.startswith(zero_difficulty):
            # if the hash result starts with certain amount of 0
            print('the nonce is: ', nonce)
            print(new_block)
            return new_block
        else:
            # else, add nonce and remake the block
            nonce += 1
            new_block = edit_json(new_block, 'nonce', nonce)

mine(signed_message, 2)

# ===== an example of a mined block =====
lolvar = '{"sender": "alice", "receiver": "bob", "amount": 0.1, "signature": "ab030ccdc6ff5104a27fdf73c9e3166a093e0ca99179de7de381c7e8cbf647fc78150a08202c5f3e76d1163ad2cc258c5b41369dc6af17390b4a3afff1541f20", "nonce": 1565}'.encode()
sha = hashlib.sha256()
sha.update(lolvar)
print(sha.hexdigest()) # 0008f1b400894b2ccbac170f529e9d3afc79514b0f242a7e12502f1f1b5b0c13
# print(int(sha.hexdigest(), 16))