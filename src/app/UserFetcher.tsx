"use client";
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/userSlice"; // Your Redux slice
import { getUserData } from "@/action/getUserData"; // Your helper function

const UserFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserData();
        if (userData) {
          dispatch(setUser(userData.user));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [dispatch]);

  return null;
};

export default UserFetcher;