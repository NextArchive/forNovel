import { Calculate, Management, Statistics } from "./piece";

type Props = {
  type: string;
  SETTING_TYPE: Array<string>;
};

export default function SettingContent({ type, SETTING_TYPE }: Props) {
  return (
    <>
      {type === SETTING_TYPE[0] ? (
        <Management />
      ) : type === SETTING_TYPE[1] ? (
        <Statistics />
      ) : type === SETTING_TYPE[2] ? (
        <Calculate />
      ) : null}
    </>
  );
}
