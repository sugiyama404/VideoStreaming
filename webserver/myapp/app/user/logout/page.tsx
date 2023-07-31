"use client";
//@ts-ignore
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>logout</h1>
      <button onClick={() => signOut()}>
        logout
      </button>
    </div>
  )
}
