import { Logo } from "@/components";
import UserNavigator from "./UserNavigator";

export default function HeaderLogo() {
  return (
      <div className="flex justify-between items-center gap-[20px]">
        <Logo/>
        <div className="hidden max-mobile_b:block">
        <UserNavigator/>
        </div>
      </div>
  );
}
