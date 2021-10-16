import { LocalStorageMode } from "@/state/LocalStorage/model";
import { SessionStorageMode } from "@/state/SessionStorage/model";

abstract class StateBase {
  static useLocalStorage: (
    mode: "set" | "get",
    key: string,
    value?: any
  ) => any;

  static useSessionStorage: (
    mode: "set" | "get",
    key: string,
    value?: any
  ) => any;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@LocalStorageMode({})
@SessionStorageMode({})
export default class State extends StateBase {
  constructor() {
    super();
  }
}
