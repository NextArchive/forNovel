declare module "types" {
  import { Dispatch, SetStateAction } from "react";
  type components = {
    stateBoolean: boolean;
    setBoolean: Dispatch<SetStateAction<boolean>>;
  };
  type text = {
    text: string;
  }
}
