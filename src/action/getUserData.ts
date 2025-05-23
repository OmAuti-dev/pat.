"use server";

import { auth } from "@clerk/nextjs/server";

export async function getUserData() {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    throw new Error("Unauthorized: Missing token");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Failed Response:", text);
    throw new Error("Failed to fetch user data");
  }

  const data = await response.json();
  return data.user; // because you are returning { success: true, user }
}
