"use client";
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter();
  setTimeout(() => {
      router.push('/beta/login');
      
  }, 5000);

  return (
    <p></p>
  )
}