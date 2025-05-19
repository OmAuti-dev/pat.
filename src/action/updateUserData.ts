"use server";

import { auth } from "@clerk/nextjs/server";

export async function updateUserData(updatedData: {
  name?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
}) {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    throw new Error("Unauthorized: Missing token");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Failed Response:", text);
    throw new Error("Failed to update user data");
  }

  const data = await response.json();
  return data.updatedUser; // because your backend returns { success: true, updatedUser }
}
