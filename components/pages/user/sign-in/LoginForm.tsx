"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-[10px]">
      <div className="xy-center-f gap-[10px]">
        <div className="w-[100%] flex items-center justify-between gap-[5px]">
          <label htmlFor="email">Email</label>
          <input
            className="borders border-[2px] p-[1px]"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-[100%] flex items-center justify-between gap-[20px]">
          <label htmlFor="password">Password</label>
          <input
            className="borders border-[2px] p-[1px]"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="px-[16px] borders border-[2px] xy-center-f" type="submit">확인</button>
    </form>
  );
};

export default LoginForm;
