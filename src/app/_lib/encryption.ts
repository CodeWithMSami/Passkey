import CryptoJS from "crypto-js";


const SECRET_KEY =
  process.env.PASSWORD_SECRET_KEY!;


const SALT =
  process.env.PASSWORD_SALT!;



function generateKey() {

  return CryptoJS.PBKDF2(
    SECRET_KEY,
    CryptoJS.enc.Utf8.parse(SALT),
    {
      keySize: 256 / 32,
      iterations: 10000,
    }
  );

}






export function encryptPassword(
  password: string
) {

  const key =
    generateKey();



  const encrypted =
    CryptoJS.AES.encrypt(
      password,
      key.toString()
    ).toString();



  return encrypted;

}







export function decryptPassword(
  encryptedPassword: string
) {

  const key =
    generateKey();



  const bytes =
    CryptoJS.AES.decrypt(
      encryptedPassword,
      key.toString()
    );



  return bytes.toString(
    CryptoJS.enc.Utf8
  );

}