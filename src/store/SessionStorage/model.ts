import "reflect-metadata";
import { ref } from "vue";
import { SessionStorageConfig } from "./type";

// 类装饰器
export function SessionStorageMode(config: SessionStorageConfig): any {
  const SessionStorageConfigKey = Symbol("LocalStorage");

  return function (Target: any) {
    // 把 EnhancedTableClass 的静态方法全部设置到原型链上了
    return class SessionStorageClass extends Target {
      constructor(data: any) {
        super(data);
        Reflect.defineMetadata(
          SessionStorageConfigKey,
          ref<SessionStorageConfig>(config),
          Target
        );
      }

      // 获取配置
      static get Config(): SessionStorageConfig {
        const config = Reflect.getMetadata(SessionStorageConfigKey, Target);
        return config;
      }

      static useSessionStorage(mode: "get", key: string): any;
      static useSessionStorage(mode: "set", key: string, value: any): void;
      static useSessionStorage(mode: "remove", key: string): void;
      static useSessionStorage(
        mode: "key",
        key: string | number
      ): string | null;
      static useSessionStorage(mode: "clear"): void;
      static useSessionStorage(mode: "length"): number;
      static useSessionStorage(
        mode: any,
        key?: string | number,
        value?: any
      ): any {
        if (mode === "get") {
          return SessionStorageClass._SessionStorage_get(key as string);
        }
        if (mode === "set") {
          SessionStorageClass._SessionStorage_set(key as string, value);
        }
        if (mode === "remove") {
          SessionStorageClass._LocalStorage_remove(key as string);
        }
        if (mode === "clear") {
          SessionStorageClass._SessionStorage_clear();
        }
        if (mode === "key") {
          SessionStorageClass._SessionStorage_key(key as number);
        }
        if (mode === "length") {
          SessionStorageClass._SessionStorage_length();
        }
      }

      // 下面之所以把每个方法重写一遍，是因为我们 LocalStorageConfig 配置，可以在存进去前做一些操作
      static _SessionStorage_get(key: string): any {
        return sessionStorage.getItem(key);
      }

      static _SessionStorage_set(key: string, value: any): void {
        sessionStorage.setItem(key, value);
      }

      static _SessionStorage_remove(key: string): void {
        sessionStorage.removeItem(key);
      }

      static _SessionStorage_clear(): void {
        sessionStorage.clear();
      }

      static _SessionStorage_key(key: number): string | null {
        return sessionStorage.key(key);
      }

      static _SessionStorage_length(): number {
        return sessionStorage.length;
      }
    };
  };
}
