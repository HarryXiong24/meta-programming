// 用于做一些扩展，如是否加密
export interface VuexConfig {
  config?: any;
}

export interface VuexParma {
  get: [target: any, key: string];
  set: [target: any, key: string, value: any];
}

export interface VuexReturn {
  get: any;
  set: void;
}
