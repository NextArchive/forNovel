"use client"

import { signIn, useSession } from "next-auth/react";

export default function GoogleLoginButton() {
  const { data: session } = useSession()
  return (
    <button onClick={() => signIn("google", { callbackUrl: "/" })}>
      구글 로그인
    </button>
  );
}

