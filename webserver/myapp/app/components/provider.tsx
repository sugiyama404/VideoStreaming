'use client';
//@ts-ignore
import { SessionProvider } from "next-auth/react";
//@ts-ignore
import React from "react";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
};

export const Provider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
