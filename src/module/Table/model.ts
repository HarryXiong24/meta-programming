import "reflect-metadata";
import { getConfigMap } from "@/utils/utils";

import {
  ColumnPropertyConfig,
  columnConfig,
  TableColumn,
  ClassConfig,
  Record,
} from "./type";
import { Ref, ref } from "vue";

// 类装饰器, 处理通过装饰器收集上来的元数据, 扩展类的静态方法以及属性的(实现TableBase抽象类)
export function EnhancedTableClass(config: ClassConfig): any {
  const cacheColumnConfigKey = Symbol("cacheColumnConfigKey");
  const tableConfigKey = Symbol("config");

  return function (Target: any) {
    // 把 EnhancedTableClass 的静态方法全部设置到原型链上了
    return class EnhancedTableClass extends Target {
      constructor(data: any) {
        super(data);
        Reflect.defineMetadata(
          tableConfigKey,
          ref<ClassConfig>(config),
          Target
        );
      }

      // 获取列上的元数据
      static get columnConfig(): Map<string, ColumnPropertyConfig> {
        return getConfigMap<ColumnPropertyConfig>(
          EnhancedTableClass,
          cacheColumnConfigKey,
          columnConfig.metaKey
        );
      }

      // 获取表格头
      static getColumns(): TableColumn[] {
        const list: TableColumn[] = [];
        // console.log("columnConfig", EnhancedTableClass.columnConfig);
        EnhancedTableClass.columnConfig.forEach((config) =>
          list.push(config as TableColumn)
        );
        return list;
      }

      // 获取表格数据
      static async getList<T>(api: any): Promise<Record<T>> {
        const result = await api();

        return {
          total: result.count,
          list: result.data.map((item: T) => item),
        };
      }

      // 获取配置数据
      static getConfig(): ClassConfig {
        const config = Reflect.getMetadata(tableConfigKey, Target);
        return config;
      }

      // 分页切换时
      static pageChange(pagination: any): void {
        const oldConfig: Ref<ClassConfig> =
          EnhancedTableClass.getConfig() as Ref<ClassConfig>;
        console.log(oldConfig);
        oldConfig.value.pagination = pagination;
      }
    };
  };
}
