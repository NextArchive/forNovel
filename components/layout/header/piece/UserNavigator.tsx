import { profile_ico, search_ico } from "@/public/asset/images/icon";
import Image from "next/image";
import Link from "next/link";

export default function UserNavigator() {
  return (
    <nav id="user_navigator">
      <ul className="flex gap-x-[10px] max-mobile_s:gap-x-[5px]">
        <li className="max-laptop:w-[30px] max-mobile_b:w-[25px]">
          <Link href="/">
            <Image src={search_ico} alt={"검색 아이콘"} />
          </Link>
        </li>
        <li className="max-laptop:w-[30px] max-mobile_b:w-[25px]">
          <Link href="/user/sign-in">
            <Image src={profile_ico} alt={"프로필 아이콘"} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
