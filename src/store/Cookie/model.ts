import "reflect-metadata";
import { ref } from "vue";
import { CookieConfig } from "./type";
import Cookie from "js-cookie";

// 类装饰器
export function CookieMode(config: CookieConfig): any {
  const CookieConfigKey = Symbol("Cookie");

  return function (Target: any) {
    // 把 EnhancedTableClass 的静态方法全部设置到原型链上了
    return class CookieClass extends Target {
      constructor(data: any) {
        super(data);
        Reflect.defineMetadata(
          CookieConfigKey,
          ref<CookieConfig>(config),
          Target
        );
      }

      // 获取配置
      static get Config(): CookieConfig {
        const config = Reflect.getMetadata(CookieConfigKey, Target);
        return config;
      }

      static useCookie(mode: "get", key: string): any;
      static useCookie(mode: "set", key: string, value: any): void;
      static useCookie(mode: "remove", key: string): void;
      static useCookie(mode: any, key: string | number, value?: any): any {
        if (mode === "get") {
          return CookieClass._Cookie_get(key as string);
        }
        if (mode === "set") {
          CookieClass._Cookie_set(key as string, value);
        }
        if (mode === "remove") {
          CookieClass._Cookie_remove(key as string);
        }
      }

      // 下面之所以把每个方法重写一遍，是因为我们 CookieConfig 配置，可以在存进去前做一些操作
      static _Cookie_get(key: string): any {
        return Cookie.get(key);
      }

      static _Cookie_set(key: string, value: any): void {
        Cookie.set(key, value);
      }

      static _Cookie_remove(key: string): void {
        Cookie.remove(key);
      }
    };
  };
}
