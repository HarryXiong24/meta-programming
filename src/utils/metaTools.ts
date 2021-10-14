import "reflect-metadata";

// 属性装饰器的返回约束
export type DecoratorType<T> = {
  metaKey: symbol;
  properDecoratorFunc: (config: T) => PropertyDecorator;
};

// 创建属性装饰器的方法, 返回创建的唯一键, 以及装饰函数
export function CreateProperDecorator<T>(): DecoratorType<T> {
  const metaKey = Symbol();

  function properDecoratorFunc(config: T): PropertyDecorator {
    return function (target, propertyKey) {
      // 在 target 对象的 propertyKey 属性上设置名为 metaKey，值为 config 的元数据
      Reflect.defineMetadata(metaKey, config, target, propertyKey);
    };
  }

  return { metaKey, properDecoratorFunc };
}

// 获取属性的元数据
export function getConfigMap<T>(
  target: any,
  cacheKey: symbol,
  metaKey: symbol
): Map<string, T> {
  // console.log("target", target);
  // console.log("cacheKey", cacheKey);
  // console.log("metaKey", metaKey);
  // console.log("target[cacheKey]", target[cacheKey]);
  // 如果存在 cacheKey 属性，说明属性里存了键值对，可以直接返回
  if (target[cacheKey]) {
    return target[cacheKey];
  }
  const instance = new target({});
  // console.log("instance", instance);
  // 获取到实例的所有属性
  const keys = Object.keys(instance);
  // console.log("keys", keys);

  // 迭代器，不断的往 map 里面增加键值对
  target[cacheKey] = keys.reduce((map, key) => {
    // 读取 instance 对象 key 属性上的名为 metaKey 的元数据
    const config = Reflect.getMetadata(metaKey, instance, key);
    // console.log("config", config);
    if (config) {
      map.set(key, config);
    }
    return map;
  }, new Map<string, T>());

  // console.log("target[cacheKey]", target[cacheKey]);
  return target[cacheKey];
}
