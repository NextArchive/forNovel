import { GoogleLoginButton, LoginForm, SignUpButton } from "@/components";

export default function SignIn() {
  return (
    <main>
      <div className="h-[100dvh] basic-screen section-screen xy-center-f max-tablet:xy-center-f">
        <h1 className="text-2xl">회원 접속</h1>
        <div className="borders border-[2px] p-[10px]">
          <LoginForm />
          <div className="flex justify-evenly mt-[20px]">
            <GoogleLoginButton />
            <SignUpButton />
          </div>
        </div>
      </div>
    </main>
  );
}
