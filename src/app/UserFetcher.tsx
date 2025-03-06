"use client";
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/userSlice"; // Your Redux slice
import { getUserData } from "@/action/getUserData"; // Your helper function
import { useAuth } from "@clerk/nextjs";

const UserFetcher = () => {
  const dispatch = useDispatch();

  const { getToken } =  useAuth();
  useEffect(() => {
    
    const fetchUser = async () => {
      try {
        const token = await getToken();
        if(!token){
          return 
        }
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