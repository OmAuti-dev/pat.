'use client'
import React from 'react'
import { fetchUsers } from "../utils";
import  { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
const Page = () => {
      const { getToken } = useAuth();
      useEffect(() => {
         console.log(fetchUsers(getToken))
            
      }, [])
  return (
    <div>page</div>
  )
}

export default Page