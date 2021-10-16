import "reflect-metadata";
import { ref } from "vue";
import { LocalStorageConfig } from "./type";

// 类装饰器
export function LocalStorageMode(config: LocalStorageConfig): any {
  const LocalStorageConfigKey = Symbol("LocalStorage");

  return function (Target: any) {
    // 把 EnhancedTableClass 的静态方法全部设置到原型链上了
    return class LocalStorageClass extends Target {
      constructor(data: any) {
        super(data);
        Reflect.defineMetadata(
          LocalStorageConfigKey,
          ref<LocalStorageConfig>(config),
          Target
        );
      }

      // 获取配置
      static get Config(): LocalStorageConfig {
        const config = Reflect.getMetadata(LocalStorageConfigKey, Target);
        return config;
      }

      static useLocalStorage(mode: "get", key: string): any;
      static useLocalStorage(mode: "set", key: string, value: any): void;
      static useLocalStorage(mode: "remove", key: string): void;
      static useLocalStorage(mode: "key", key: string | number): string | null;
      static useLocalStorage(mode: "clear"): void;
      static useLocalStorage(mode: "length"): number;
      static useLocalStorage(
        mode: any,
        key?: string | number,
        value?: any
      ): any {
        if (mode === "get") {
          return LocalStorageClass._LocalStorage_get(key as string);
        }
        if (mode === "set") {
          LocalStorageClass._LocalStorage_set(key as string, value);
        }
        if (mode === "remove") {
          LocalStorageClass._LocalStorage_remove(key as string);
        }
        if (mode === "clear") {
          LocalStorageClass._LocalStorage_clear();
        }
        if (mode === "key") {
          LocalStorageClass._LocalStorage_key(key as number);
        }
        if (mode === "length") {
          LocalStorageClass._LocalStorage_length();
        }
      }

      // 下面之所以把每个方法重写一遍，是因为我们 LocalStorageConfig 配置，可以在存进去前做一些操作
      static _LocalStorage_get(key: string): any {
        return localStorage.getItem(key);
      }

      static _LocalStorage_set(key: string, value: any): void {
        localStorage.setItem(key, value);
      }

      static _LocalStorage_remove(key: string): void {
        localStorage.removeItem(key);
      }

      static _LocalStorage_clear(): void {
        localStorage.clear();
      }

      static _LocalStorage_key(key: number): string | null {
        return localStorage.key(key);
      }

      static _LocalStorage_length(): number {
        return localStorage.length;
      }
    };
  };
}
