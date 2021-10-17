import { CreateProperDecorator } from "@/utils/metaTools";

// 类装饰器的约束: 可以根据业务给类不同的数据
export interface TableConfig {
  size?: "middle" | "small";
  bordered?: boolean;
  pagination?: {
    "show-less-items"?: boolean;
    current?: number;
    pageSize?: number;
    total?: number;
  };
}

// 后台返回字段约束
export interface TableRecord<T> {
  total: number;
  list: T[];
}

// 表格列的约束
export interface TableColumn {
  title: string;
  dataIndex: string;
  key: string;
  width: number;
  slots: {
    title?: string;
    customRender?: string;
  };
}

// 让TableColumn中的属性都是可选的
export type ColumnPropertyConfig = Partial<TableColumn>;

// 创建表格列的属性装饰器
export const columnConfig = CreateProperDecorator<ColumnPropertyConfig>();

// 拿到属性装饰器
export const ColumnDecorator = columnConfig.properDecoratorFunc;

// 定义静态类约束
export interface TableStaticBase {
  new (): TableBase;

  getTableColumns: <T>() => TableColumn[];

  getTableList: <T>(api: any, condition?: any) => Promise<TableRecord<T>>;

  getTableConfig: () => TableConfig;

  pageChange: (pagination: any, pageSize: number) => void;
}
export interface TableBase {
  name?: string;
}
