# https://nitratine.net/blog/post/asymmetric-encryption-and-decryption-in-python/
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding

private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048,
    backend=default_backend()
)
public_key = private_key.public_key()

"""
when you sign a message using a private key, that basically means
that you have seen that message and approved it. It's like seeing a
letter and signing on it. But in cryptography, the signature is in cipher text

signing can only be done using a private key. Because that's the whole point of
digital signature: to know whether you've seen the message and approve it.
"""
# try signing a message
message = b'hello'

# signature is a binary data type
# or maybe not binary but base64 data
signature = private_key.sign(
    message,
    padding.PSS(
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=padding.PSS.MAX_LENGTH
    ),
    hashes.SHA256()
)

"""
Verification is the action of verifying whether the signature is true or not.
You can check this using a public key. A signature is a proof that the owner of the
private key has seen and approved the message, and to check whether the signature is true
you can verify it using the public key. A verification is a function of the public key,
message, and the signature. If the whole thing is verified, that basically means that the
message has been verified by the person who has the private key.
"""
# verify using the signature
dummy_message = b'hello from the other side'
public_key.verify(
    signature,
    message, # if you put dummy_message here, the verification will be false
    padding.PSS(
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=padding.PSS.MAX_LENGTH
    ),
    hashes.SHA256()
)

# todo: if you want to take it to the next level, show the keys and signature in string,
# not bytes.

"""
so here's the reason why you shouldn't share your bitcoin private key to anyone: it can be used
to sign transaction without your consent. If person B knows the private key of person A,
person B can just make a transaction that says 'person A transfered all his bitcoin to person B,'
sign it using the person A's private key, and pass the transaction into the bitcoin blockchain.
The transaction will then be verified and the funds will be transfered without the consent of
person A.

Never share your private keys!
"""

# Tip: this is how show the binary data to hex
import binascii
print(binascii.hexlify(signature).decode())
print(private_key, public_key)

"""
a cool thought experiment: how do you prove that someone is satoshi?
The person then sign a message (any message) with satoshi's privte key, we'll get a signature
We then can get satoshi's public key by going into the genesis block
We can then verify that using the message newly signed message, public key, and signature
"""