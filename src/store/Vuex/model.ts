import "reflect-metadata";
import { ref } from "vue";
import { VuexConfig } from "./type";

// 类装饰器
export function VuexMode(config: VuexConfig): any {
  const VuexConfigKey = Symbol("Vuex");

  return function (Target: any) {
    // 把 EnhancedTableClass 的静态方法全部设置到原型链上了
    return class VuexClass extends Target {
      constructor(data: any) {
        super(data);
        Reflect.defineMetadata(VuexConfigKey, ref<VuexConfig>(config), Target);
      }

      // 获取配置
      static get Config(): VuexConfig {
        const config = Reflect.getMetadata(VuexConfigKey, Target);
        return config;
      }

      static useVuex(mode: "get", target: any, key: string): any;
      static useVuex(mode: "set", target: any, key: string, value: any): void;
      static useVuex(mode: any, target: any, key: string, value?: any): any {
        if (mode === "get") {
          return VuexClass._Vuex_get(target, key);
        }
        if (mode === "set") {
          VuexClass._Vuex_set(target, key, value);
        }
      }

      // 下面之所以把每个方法重写一遍，是因为我们 VuexConfig 配置，可以在存进去前做一些操作
      static _Vuex_get(target: any, key: string): any {
        return target.state[key];
      }

      static _Vuex_set(target: any, key: string, value: any): void {
        target.dispatch(`_action_${key}`, value);
      }
    };
  };
}
