"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const Page = () => {
  const data = useSelector((state: RootState) => state);
  const user = data.user;
  if (!user) return <p>Loading...</p>;

  return <div className="pt-20">{user ? <h1>Welcome, {user.name}!</h1> : <h1>no!</h1>}</div>;
};

export default Page;