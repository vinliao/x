import hashlib

# example of simple hash
sha = hashlib.sha256()
sha.update(b'Hello')
print(sha.hexdigest())

# mining example
hash_string = ''
nonce = 0
message = 'Hello!!'
# I don't have message here lol
while not hash_string.startswith('000'):
    nonce += 1
    sha = hashlib.sha256()
    sha.update(bytes(nonce))
    sha.update(message.encode())
    
    result = sha.hexdigest()
    print(result)
    hash_string = result

print('The nonce is: ', nonce)

# verify
sha = hashlib.sha256()
# This is equivalent of 1165Hello!!
sha.update(bytes(1165) + b'Hello!!')
print(sha.hexdigest())