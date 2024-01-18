import { ListTitle } from "@/components";
import { Wrap } from "./piece";

export default function FirstSection() {
  return (
    <section className="w-full">
      <div className="basic-screen section-screen xy-center-f max-tablet:xy-center-f">
        <ListTitle text={"최신 작품"}/>
        <Wrap/>
      </div>
    </section>
  );
}
