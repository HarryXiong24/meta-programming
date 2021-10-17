import { CSSProperties } from "@vue/runtime-dom";

// 类装饰器的约束: 可以根据业务给类不同的数据
export interface DescriptionsConfig {
  size?: "default" | "middle" | "small";
  layout?: "horizontal" | "vertical";
  bordered?: boolean;
  title?: string;
  labelStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

// 后台返回字段约束
export interface DescriptionsRecord<T> {
  form: any;
}

// 定义静态类约束
export interface DescriptionsStaticBase {
  new (): DescriptionsBase;
  getDescriptionsList: <T>(
    api: any,
    condition?: any
  ) => Promise<DescriptionsRecord<T>>;
  getDescriptionsConfig: () => DescriptionsConfig;
}

export interface DescriptionsBase {
  name?: string;
}
