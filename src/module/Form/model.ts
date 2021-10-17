import "reflect-metadata";
import { FormConfig, FormRecord } from "./type";
import { ref } from "vue";

// 类装饰器, 处理通过装饰器收集上来的元数据, 扩展类的静态方法以及属性的(实现TableBase抽象类)
export function EnhancedFormClass(config: FormConfig): any {
  const FormConfigKey = Symbol("FormConfig");

  return function (Target: any) {
    // 把 EnhancedTableClass 的静态方法全部设置到原型链上了
    return class EnhancedFormClass extends Target {
      constructor(data: any) {
        super(data);
        Reflect.defineMetadata(FormConfigKey, ref<FormConfig>(config), Target);
      }

      static async getFormList<T>(api: any): Promise<FormRecord<T>> {
        const result = await api();

        return {
          form: result.data,
        };
      }

      // 获取配置数据
      static getFormConfig(): FormConfig {
        const config = Reflect.getMetadata(FormConfigKey, Target);
        return config;
      }
    };
  };
}
