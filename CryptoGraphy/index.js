import express from "express";
import crypto from "crypto";

const app = express();
app.use(express.json());

//* Generate RSA Key Pair
const gernerateKeys = () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  return { publicKey, privateKey };
};

//* Creating an Encrypted and Decrypted Function
// ? Encrypted
const encrypt = (publicKey, message) => {
  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message));
  return encrypted.toString("base64");
};

//? Decrypted
const decrypt = (privateKey, encryptedMessage) => {
  const decrypted = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedMessage, "base64"),
  );
  return decrypted.toString("utf8");
};

const keys = gernerateKeys();
const publicKey = keys.publicKey;
const privateKey = keys.privateKey;

//* EndPoints of Encrypted and Decrypted
app.post("/encrypt", (req, res) => {
  const { message } = req.body;
  const encryptedData = encrypt(publicKey, message);
  res.json({ encryptedData });
});

app.post("/decrypt", (req, res) => {
  const { encryptedData } = req.body;
  const decrypted = decrypt(privateKey, encryptedData);
  res.json({ decrypted });
});

app.listen(5000, () => {
  console.log("Server is Running at Port 5000");
  console.log("Public Key \n", publicKey);
  console.log("Private Key \n", privateKey);
});
