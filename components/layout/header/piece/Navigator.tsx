import UserNavigator from "./UserNavigator";

const NAVIGATION = [
  { title: "최신작품", route: "", key: 110_1 },
  { title: "인기작품", route: "", key: 110_2 },
  { title: "완결작품", route: "", key: 110_3 },
  { title: "장르별작품", route: "", key: 110_4 },
  { title: "커뮤니티", route: "", key: 110_5 },
  { title: "공지사항", route: "", key: 110_6 },
  { title: "고객안내", route: "", key: 110_7 },
];

const gNavList = NAVIGATION.map((list) => {
  return (
    <li
      className={
        list.title === "공지사항" || list.title === "고객안내"
          ? "max-mobile_b:hidden"
          : ""
      }
      key={list.key}
    >
      <a
        className="w-max text-list block max-mobile_b:p-[5px] max-mobile_b:write-vertical text-center"
        href={list.route}
      >
        {list.title}
      </a>
    </li>
  );
});
export default function Navigator() {

  return (
    <div className="flex justify-between items-center gap-x-[30px]">
      <nav id="global_navigator">
        <ul className="flex justify-center max-tablet:mt-[10px] gap-[30px] max-mobile_s:gap-[10px] max-mobile_b:border-solid max-mobile_b:border-black max-mobile_b:border-t-[1px]">
          {gNavList}
        </ul>
      </nav>
      <div className="max-tablet:hidden">
        <UserNavigator />
      </div>
    </div>
  );
}
