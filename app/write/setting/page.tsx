"use client";

import { SettingContent, SettingList } from "@/components";
import { useState } from "react";

const SETTING_TYPE = ["management", "statistics", "calculate"];

export default function Setting() {
  const [type, setType] = useState(SETTING_TYPE[0]);
  return (
    <>
      <main>
        <SettingList setType={setType} SETTING_TYPE={SETTING_TYPE} />
        <SettingContent type={type} SETTING_TYPE={SETTING_TYPE}/>
      </main>
    </>
  );
}
