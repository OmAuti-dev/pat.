"use server";
import { TaskData } from "@/app/utils";
import { auth } from "@clerk/nextjs/server";

export async function createTask(taskData : TaskData): Promise<any> {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    throw new Error("Unauthorized: Missing token");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(taskData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}
