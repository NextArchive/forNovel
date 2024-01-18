import { components } from "types";

export default function MenuButton({ stateBoolean, setBoolean }: components) {
  return (
    <>
      <button
        className="mobile_b:hidden flex flex-col w-[30px] h-[25px] justify-between"
        onClick={()=>setBoolean(!stateBoolean)}
      >
        <div className="bg-[#121212] w-[30px] h-[5px] rounded-[5px]"></div>
        <div className="bg-[#121212] w-[30px] h-[5px] rounded-[5px]"></div>
        <div className="bg-[#121212] w-[30px] h-[5px] rounded-[5px]"></div>
      </button>
    </>
  );
}
