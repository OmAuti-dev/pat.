"use server"
import { auth } from "@clerk/nextjs/server";


export async function fetchTasks(): Promise<any> {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    throw new Error("Unauthorized: Missing token");
  }

  const response = await fetch(
    "https://ombackend-lqng.onrender.com/api/tasks",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}
  