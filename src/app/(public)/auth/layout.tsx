"use client";
import { useAuthStore } from "@/store";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authStore = useAuthStore();
  if (authStore.isLoggedIn) redirect("/");
  return children;
}
