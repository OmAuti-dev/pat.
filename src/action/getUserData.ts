"use server"
import { auth } from "@clerk/nextjs/server";

export async function getUserData() {
    const { getToken } = await auth();
    const token = await getToken();
  
    if (!token) {
      throw new Error("Unauthorized: Missing token");
    }
  
    // Fetch user data
    const response = await fetch(
      "https://ombackend-lqng.onrender.com/api/user/me", // Your API endpoint
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
  
    const userData = await response.json();
    return userData;
  }