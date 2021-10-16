import { ColumnDecorator, TableBase } from "@/module/Table/type";
import { EnhancedTableClass } from "@/module/Table/model";

export interface PersonConstraint {
  key: string | number;
  id: number;
  name: string;
  age: number;
  sex: "male" | "female" | "unknown";
  address: string;
  operator: string;
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

  static info = (record?: any): any => {
    console.log("Info", record);
  };

  static edit = (record?: any): any => {
    console.log("Edit", record);
  };

  static del = (record?: any): any => {
    console.log("Delete", record);
  };
}
