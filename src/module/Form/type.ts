// 类装饰器的约束: 可以根据业务给类不同的数据
export interface FormConfig {
  layout?: "horizontal" | "vertical" | "inline";
  name?: string;
  labelAlign?: "left" | "right";
  rules?: any;
  labelCol?: any;
  wrapperCol?: any;
}

// 后台返回字段约束
export interface FormRecord<T> {
  form: any;
}

export interface FormBase {
  name?: string;
}
// 表格抽象类
export interface FormStaticBase {
  new (): FormBase;
  getFormList: <T>(api: any, condition?: any) => Promise<FormRecord<T>>;
  getFormConfig: () => FormConfig;
}
