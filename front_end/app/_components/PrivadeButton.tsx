"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export function ProvideButton() {
  const router = useRouter();
  return <Button onClick={() => router.push("/privadeTodos")}>Privade</Button>;
}
