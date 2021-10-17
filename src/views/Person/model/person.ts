import {
  ColumnDecorator,
  TableRecord,
  TableBase,
  TableColumn,
  TableConfig,
} from "@/module/Table/type";
import { EnhancedTableClass } from "@/module/Table/model";
import { EnhancedDescriptionsClass } from "@/module/Descriptions/model";
import {
  DescriptionsBase,
  DescriptionsConfig,
  DescriptionsRecord,
} from "@/module/Descriptions/type";
import { EnhancedFormClass } from "@/module/Form/model";
import { FormBase, FormConfig, FormRecord } from "@/module/Form/type";

interface PersonConstraint {
  key: string | number;
  id: number;
  name: string;
  age: number;
  sex: "male" | "female" | "unknown";
  address: string;
  operator: string;
}

abstract class PersonBase implements TableBase, DescriptionsBase, FormBase {
  static getTableColumns: <T>() => TableColumn[];
  static getTableList: <T>(
    api: any,
    condition?: any
  ) => Promise<TableRecord<T>>;
  static getTableConfig: () => TableConfig;
  static pageChange: (pagination: any, pageSize: number) => void;
  static getDescriptionsList: <T>(
    api: any,
    condition?: any
  ) => Promise<DescriptionsRecord<T>>;
  static getDescriptionsConfig: () => DescriptionsConfig;
  static getFormList: <T>(api: any, condition?: any) => Promise<FormRecord<T>>;
  static getFormConfig: () => FormConfig;
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
@EnhancedDescriptionsClass({
  size: "middle",
  bordered: true,
  layout: "horizontal",
})
@EnhancedFormClass({})
export default class Person extends PersonBase implements PersonConstraint {
  // ColumnDecorator 装饰器的作用是定义数据列的元数据
  @ColumnDecorator({
    title: "ID",
    dataIndex: "id",
    key: "0",
  })
  id = 0;

  @ColumnDecorator({
    title: "key",
    dataIndex: "key",
    key: "5",
  })
  key: string | number = "0";

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
  sex: "male" | "female" | "unknown" = "unknown";

  @ColumnDecorator({
    title: "地址",
    dataIndex: "address",
    key: "4",
  })
  address = "";

  @ColumnDecorator({
    title: "操作",
    dataIndex: "operator",
    key: "5",
    slots: { title: "operator", customRender: "operator" },
    width: 300,
  })
  operator = "";

  constructor({
    key,
    id,
    name,
    age,
    sex,
    address,
    operator,
  }: PersonConstraint) {
    super();
    this.id = id;
    this.key = key;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.address = address;
    this.operator = operator;
  }
}
