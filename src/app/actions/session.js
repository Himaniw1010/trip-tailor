"use server";
import "server-only";

import { cookies } from "next/headers";
// Import necessary modules
import crypto from "crypto";

// Encryption function
async function encrypt(data) {
  const algorithm = "aes-256-cbc"; // Or any other algorithm of your choice
  const key = crypto.randomBytes(32); // Generate a random key
  const iv = crypto.randomBytes(16); // Generate a random initialization vector

  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
  encrypted += cipher.final("hex");

  // Return the encrypted data along with the key and iv to be able to decrypt it later
  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
    key: key.toString("hex"),
  };
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
