"use server";
import "server-only";

import { cookies } from "next/headers";
// Import necessary modules
import crypto from "crypto";

const skey = "03e353dcda7db5469eb49808c7a6304601e4c247279c5420fca0d757dfa85eef";
const siv = "bbade92b55aa004db9e85ddbef7f8a94"

async function decrypt(encryptedData) {
  const algorithm = "aes-256-cbc"; // Same algorithm used for encryption

  // Convert key and iv from hex to Buffer
  const keyBuffer = Buffer.from(skey, "hex");
  const ivBuffer = Buffer.from(siv, "hex");

  let decipher = crypto.createDecipheriv(algorithm, keyBuffer, ivBuffer);
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  // Parse and return the original data
  return JSON.parse(decrypted);
}

// Encryption function
async function encrypt(data) {
  const algorithm = "aes-256-cbc"; // Or any other algorithm of your choice
  const key = Buffer.from(skey, "hex"); // Generate a random key
  const iv = Buffer.from(siv, "hex"); // Generate a random initialization vector

  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
  encrypted += cipher.final("hex");

  // Return the encrypted data along with the key and iv to be able to decrypt it later
  return {
    encryptedData: encrypted
  };
}
export async function getCurrentUser() {
  const cookie = cookies().get("session");
  const userInfo = await decrypt(cookie.value);

  return userInfo.userId
}

export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
 
  cookies().set("session", session.encryptedData, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
