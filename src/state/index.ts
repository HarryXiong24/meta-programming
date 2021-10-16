import { LocalStorageMode } from "@/state/LocalStorage/model";

abstract class StateBase {
  static useLocalStorage: (
    mode: "set" | "get",
    key: string,
    value?: any
  ) => any;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@LocalStorageMode({})
export default class State extends StateBase {
  constructor() {
    super();
  }
}
