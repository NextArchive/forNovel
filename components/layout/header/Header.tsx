import { HeaderLogo, Navigator } from "./piece";

export default function Header() {
  return (
    <header className="w-full">
      <div className="basic-screen flex justify-between items-baseline max-tablet:xy-center-f">
        <HeaderLogo/>
        <Navigator />
      </div>
    </header>
  );
}
