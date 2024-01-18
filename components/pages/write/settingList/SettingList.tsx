import { Dispatch, SetStateAction } from "react";

type Props = {
  setType : Dispatch<SetStateAction<string>>
  SETTING_TYPE : Array<string>;
}

export default function SettingList({setType, SETTING_TYPE}:Props) {
  return (
    <nav className="basic-screen">
      <ul className="borders border-[1px] flex justify-between text-center">
        <li className=" w-[calc(100%/3)] py-[10px]">
          <button onClick={()=>setType(SETTING_TYPE[0])}>작품관리</button>
        </li>
        <li className="borders border-x-[1px] w-[calc(100%/3)] py-[10px]">
          <button onClick={()=>setType(SETTING_TYPE[1])}>작품통계</button>
        </li>
        <li className="w-[calc(100%/3)] py-[10px]">
          <button onClick={()=>setType(SETTING_TYPE[2])}>정산</button>
        </li>
      </ul>
    </nav>
  );
}
