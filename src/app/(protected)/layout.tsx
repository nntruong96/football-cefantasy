"use client";

import { Button } from "@/components";
import { useAuthStore } from "@/store";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authStore = useAuthStore();
  const [isAuthenticating, setIsAuthenticating] = useState(true); // Should true for first time

  const handleLogout = useCallback(() => {
    authStore.reset();
  }, [authStore]);

  useEffect(() => {
    // TODO: Implement logic to fetch user data from API
    setIsAuthenticating(false);
  }, []);

  if (isAuthenticating) return null;
  if (!authStore.isLoggedIn) redirect("/auth/login");

  return (
    <div className="min-h-[1000vh]">
      <header className="sticky top-0 border-b bg-white z-10">
        <div className="p-2 flex justify-between items-center">
          <h2>App title</h2>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </header>
      {children}
    </div>
  );
}
