// 用于做一些扩展，如是否加密
export interface LocalStorageConfig {
  config?: any;
}

// 所需参数约束接口
export interface LocalStorageParma {
  get: [key: string];
  set: [key: string, value: any];
  remove: [key: string];
  key: [key: number];
  clear: [];
  length: [];
}

// 所需返回值约束接口
export interface LocalStorageReturn {
  get: any;
  set: void;
  remove: void;
  key: string | null;
  clear: void;
  length: number;
}
