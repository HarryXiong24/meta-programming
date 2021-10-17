import {
  TableRecord,
  TableBase,
  TableColumn,
  TableConfig,
} from "@/models/Table/type";
import {
  DescriptionsBase,
  DescriptionsConfig,
  DescriptionsRecord,
} from "@/models/Descriptions/type";
import { FormBase, FormConfig, FormRecord } from "@/models/Form/type";

export interface PersonConstraint {
  key: string | number;
  id: number;
  name: string;
  age: number;
  sex: "male" | "female" | "unknown";
  address: string;
  operator: string;
}

export abstract class PersonBase
  implements TableBase, DescriptionsBase, FormBase
{
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
