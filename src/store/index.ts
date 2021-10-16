import { LocalStorageMode } from "./LocalStorage/model";
import { LocalStorageParma, LocalStorageReturn } from "./LocalStorage/type";
import { SessionStorageMode } from "./SessionStorage/model";
import {
  SessionStorageParma,
  SessionStorageReturn,
} from "./SessionStorage/type";

abstract class StateBase {
  static useLocalStorage: <
    T extends "get" | "set" | "remove" | "clear" | "key" | "length"
  >(
    mode: T,
    ...args: LocalStorageParma[T]
  ) => LocalStorageReturn[T];

  static useSessionStorage: <
    T extends "get" | "set" | "remove" | "clear" | "key" | "length"
  >(
    mode: T,
    ...args: SessionStorageParma[T]
  ) => SessionStorageReturn[T];
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
