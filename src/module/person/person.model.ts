import "reflect-metadata";
import { TableBase, ColumnDecorator } from "./person.type";
import { getConfigMap } from '../../utils/utils';
import { getPersonListFromServer } from "./person.service";
import {
  ColumnPropertyConfig,
  columnConfig,
  TableColumn,
  ClassConfig,
  Record,
} from "./person.type";
import { Ref, ref } from "vue";

export interface PersonConstraint {
  key: string | number;
  id: number;
  name: string;
  age: number;
  sex: "male" | "female" | "unknow";
  address: string;
}

// 类装饰器, 处理通过装饰器收集上来的元数据, 扩展类的静态方法以及属性的(实现TableBase抽象类)
export function EnhancedTableClass(config: ClassConfig): any {
  const cacheColumnConfigKey = Symbol("cacheColumnConfigKey");
  const tableConfigKey = Symbol("config");

  return function (Target: any) {
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
        console.log("columnConfig", EnhancedTableClass.columnConfig);
        EnhancedTableClass.columnConfig.forEach((config) =>
          list.push(config as TableColumn)
        );
        return list;
      }

      // 获取表格数据
      static async getList<T>(): Promise<Record<T>> {
        const result = await getPersonListFromServer();

        return {
          total: result.count,
          list: result.data.map((item: T) => new EnhancedTableClass(item)),
        };
      }

      // 获取配置数据
      static getConfig(): ClassConfig {
        const config = Reflect.getMetadata(tableConfigKey, Target);
        return config;
      }

      // 分页切换时
      static pageChange(pagination: any, pageSize: number): void {
        const oldConfig: Ref<ClassConfig> =
          EnhancedTableClass.getConfig() as Ref<ClassConfig>;
        oldConfig.value.pagination = pagination;
      }
    };
  };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@EnhancedTableClass({
  size: "middle",
  bordered: true,
  pagination: {
    "show-less-items": true,
    current: 1,
    pageSize: 5,
  },
})
export class Person extends TableBase implements PersonConstraint {
  // ColumnDecorator 装饰器的作用是定义数据列的元数据
  @ColumnDecorator({
    title: "唯一标识",
    dataIndex: "id",
    key: "0",
  })
  id = 0;

  @ColumnDecorator({
    title: "姓名",
    dataIndex: "name",
    key: "1",
  })
  name = "";

  @ColumnDecorator({
    title: "年龄",
    dataIndex: "age",
    key: "2",
  })
  age = 0;

  @ColumnDecorator({
    title: "性别",
    dataIndex: "sex",
    key: "3",
  })
  sex: "male" | "female" | "unknow" = "unknow";

  @ColumnDecorator({
    title: "地址",
    dataIndex: "address",
    key: "4",
  })
  address = "";

  @ColumnDecorator({
    title: "key",
    dataIndex: "key",
    key: "5",
  })
  key: string | number = "0";

  constructor({ key, id, name, age, sex, address }: PersonConstraint) {
    super();
    this.id = id;
    this.key = key;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.address = address;
  }
}
