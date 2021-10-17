import "reflect-metadata";
import { DescriptionsConfig, DescriptionsRecord } from "./type";
import { ref } from "vue";

// 类装饰器, 处理通过装饰器收集上来的元数据, 扩展类的静态方法以及属性的
export default function EnhancedDescriptionsClass(
  config: DescriptionsConfig
): any {
  const DescriptionsConfigKey = Symbol("DescriptionsConfig");

  return function (Target: any) {
    // 把 EnhancedTableClass 的静态方法全部设置到原型链上了
    return class EnhancedDescriptionsClass extends Target {
      constructor(data: any) {
        super(data);
        Reflect.defineMetadata(
          DescriptionsConfigKey,
          ref<DescriptionsConfig>(config),
          Target
        );
      }

      static async getDescriptionsList<T>(
        api: any
      ): Promise<DescriptionsRecord<T>> {
        const result = await api();

        return {
          form: result.data,
        };
      }

      // 获取配置数据
      static getDescriptionsConfig(): DescriptionsConfig {
        const config = Reflect.getMetadata(DescriptionsConfigKey, Target);
        return config;
      }
    };
  };
}
