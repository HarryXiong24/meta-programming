import { LocalStorageMode } from "./LocalStorage/model";
import { LocalStorageParma, LocalStorageReturn } from "./LocalStorage/type";
import { SessionStorageMode } from "./SessionStorage/model";
import {
  SessionStorageParma,
  SessionStorageReturn,
} from "./SessionStorage/type";
import { CookieMode } from "./Cookie/model";
import { CookieParma, CookieReturn } from "./Cookie/type";
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

  static useCookie: <T extends "get" | "set" | "remove">(
    mode: T,
    ...args: CookieParma[T]
  ) => CookieReturn[T];
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@LocalStorageMode({})
@SessionStorageMode({})
@CookieMode({})
export default class State extends StateBase {
  constructor() {
    super();
  }
}
