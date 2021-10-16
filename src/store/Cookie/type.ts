// 用于做一些扩展，如是否加密
export interface CookieConfig {
  config?: any;
}

// 所需参数约束接口
export interface CookieParma {
  get: [key: string];
  set: [key: string, value: any];
  remove: [key: string];
}

// 所需返回值约束接口
export interface CookieReturn {
  get: any;
  set: void;
  remove: void;
}
