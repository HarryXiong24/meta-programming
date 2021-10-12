import { CreateProperDecorator } from "@/utils/utils";

// 类装饰器的约束: 可以根据业务给类不同的数据
export interface ClassConfig {
  size?: "middle" | "small";
  bordered?: boolean;
  pagination?: {
    "show-less-items"?: boolean;
    current?: number;
    pageSize?: number;
    total?: number;
  };
}

// 属性装饰器的返回约束
export type ICPD<T> = {
  metaKey: symbol;
  properDecoratorFunc: (config: T) => PropertyDecorator;
};

// 后台返回字段约束
export interface Record<T> {
  total: number;
  list: T[];
}

// 表格列的约束
export interface TableColumn {
  title: string;
  dataIndex: string;
  key: string;
}

// 让TableColumn中的属性都是可选的
export type ColumnPropertyConfig = Partial<TableColumn>;

// 创建表格列的属性装饰器
export const columnConfig = CreateProperDecorator<ColumnPropertyConfig>();

// 拿到属性装饰器
export const ColumnDecorator = columnConfig.properDecoratorFunc;

// 表格抽象类
export abstract class TableBase {
  static getColumns<T>(): TableColumn[] {
    return [];
  }

  static async getList<T>(): Promise<Record<T>> {
    return { total: 0, list: [] };
  }

  static getConfig: () => ClassConfig;

  static change: (page: number, pageSize: number) => void;
}
