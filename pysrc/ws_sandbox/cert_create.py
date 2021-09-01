# from https://stackoverflow.com/questions/19651587/pyopenssl-creating-a-pem-file

from Crypto.PublicKey import RSA


key = RSA.generate(2048)
pv_key_string = key.exportKey()
with open ("localhost_private.pem", "w") as prv_file:
    print("{}".format(pv_key_string.decode()), file=prv_file)

pb_key_string = key.publickey().exportKey()
with open ("localhost.pem", "w") as pub_file:
    print("{}".format(pb_key_string.decode()), file=pub_file)