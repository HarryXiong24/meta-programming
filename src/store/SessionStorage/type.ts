// 用于做一些扩展，如是否加密
export interface SessionStorageConfig {
  config?: any;
}

export interface SessionStorageParma {
  get: [key: string];
  set: [key: string, value: any];
  remove: [key: string];
  key: [key: number];
  clear: [];
  length: [];
}

export interface SessionStorageReturn {
  get: any;
  set: void;
  remove: void;
  key: string | null;
  clear: void;
  length: number;
}
