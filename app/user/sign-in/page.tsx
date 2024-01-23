import { GoogleLoginButton, SignUpButton } from "@/components";

export default function SignIn() {
  return (
    <main>
      <div className="basic-screen section-screen xy-center-f max-tablet:xy-center-f">
        <h1 className="text-2xl">회원 접속</h1>
        <div>
        <GoogleLoginButton />
        <SignUpButton />
        </div>
      </div>
    </main>
  );
}
