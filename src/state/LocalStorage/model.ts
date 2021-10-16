import "reflect-metadata";
import { ref } from "vue";

// 用于做一些扩展，如是否加密
export interface LocalStorageConfig {
  config?: any;
}

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

      static useLocalStorage(
        mode: "set" | "get",
        key: string,
        value?: any
      ): any {
        if (mode === "get") {
          return LocalStorageClass.getLocalStorage(key);
        }
        if (mode === "set") {
          LocalStorageClass.setLocalStorage(key, value);
        }
      }

      static setLocalStorage(key: string, value: any): void {
        localStorage.setItem(key, value);
      }

      static getLocalStorage(key: string): any {
        return localStorage.getItem(key);
      }
    };
  };
}
