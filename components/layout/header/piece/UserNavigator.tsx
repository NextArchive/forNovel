import { profile_ico, search_ico } from "@/public/asset/images/icon";
import Image from "next/image";

export default function UserNavigator() {
  return (
    <nav id="user_navigator">
      <ul className="flex gap-x-[10px] max-mobile_s:gap-x-[5px]">
        <li className="max-laptop:w-[30px] max-mobile_b:w-[25px]">
          <Image src={search_ico} alt={"검색 아이콘"} />
        </li>
        <li className="max-laptop:w-[30px] max-mobile_b:w-[25px]">
          <Image src={profile_ico} alt={"프로필 아이콘"} />
        </li>
      </ul>
    </nav>
  );
}
