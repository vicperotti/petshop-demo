//import "dotenv/config";
import crypto from "crypto";

//const { PW_HASH_SALT } = process.env;
const PW_HASH_SALT='f5fc64bf5fef686287ab44d61e19bcf8';
const SESSION_SECRET='thisIsNotASecureSecretSoChangeMe';

export const getHash = async (password) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, PW_HASH_SALT, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString("hex"));
    });
  });
};
