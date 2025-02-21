"use client";
import { Button } from "@/components";
import { useAuthStore } from "@/store";
import { useCallback } from "react";

export default function AuthLoginPage() {
  const authStore = useAuthStore();
  const handleLogin = useCallback(() => {
    authStore.setUser({
      createdAt: "",
      email: "",
      id: 1,
      fullName: "",
      updatedAt: "",
    });
  }, [authStore]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
