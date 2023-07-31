"use client";
//@ts-ignore
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>login</h1>
      <button onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  )
}
