"use client";
import { useSession } from "next-auth/react";
import React from "react";

const SessionController = ({ children }: { children: React.ReactNode }) => {
  const { data: sesion } = useSession();

  if (!sesion?.user) {
    return null;
  }
  return <>{children}</>;
};

export default SessionController;
