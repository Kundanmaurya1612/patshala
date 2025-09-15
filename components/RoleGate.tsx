"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import RoleModal from "@/components/RoleModal";

const RoleGate = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<string | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const storedRole = typeof window !== "undefined" ? localStorage.getItem("userRole") : null;
    setRole(storedRole);
  }, []);

  return (
    <>
      {user && !role && <RoleModal onSelect={setRole} />}
      {children}
    </>
  );
};

export default RoleGate;
