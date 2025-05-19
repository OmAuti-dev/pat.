// app/api/tasks/route.ts
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { getToken, userId } = await auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = await getToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return new Response("Failed to fetch tasks", { status: 500 });
  }

  const data = await res.json();
  return Response.json(data);
}
