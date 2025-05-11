const bs58 = require("bs58");
const fs = require("fs");

const keyArray = JSON.parse(fs.readFileSync("key.json"));
const secretKey = bs58.encode(Buffer.from(keyArray));
console.log(secretKey);
