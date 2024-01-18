"use client"

import { signIn } from "next-auth/react";

export default function GoogleLoginButton() {
  return (
    <button onClick={() => signIn("google")}>
      구글로 로그인
    </button>
  );
}