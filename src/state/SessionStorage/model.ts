import "reflect-metadata";
import { ref } from "vue";

// 用于做一些扩展，如是否加密
export interface SessionStorageConfig {
  config?: any;
}

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

      static useSessionStorage(
        mode: "set" | "get",
        key: string,
        value?: any
      ): any {
        if (mode === "get") {
          return SessionStorageClass.getSessionStorage(key);
        }
        if (mode === "set") {
          SessionStorageClass.setSessionStorage(key, value);
        }
      }

      static setSessionStorage(key: string, value: any): void {
        sessionStorage.setItem(key, value);
      }

      static getSessionStorage(key: string): any {
        return sessionStorage.getItem(key);
      }
    };
  };
}
