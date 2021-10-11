import "reflect-metadata";
import { ICPD } from "@/module/person/person.type";

// 1.一个用来创建属性装饰器的方法, 返回创建的唯一键, 以及装饰函数
export function CreateProperDecorator<T>(): ICPD<T> {
  const metaKey = Symbol();

  function properDecoratorF(config: T): PropertyDecorator {
    return function (target, propertyKey) {
      Reflect.defineMetadata(metaKey, config, target, propertyKey);
    };
  }

  return { metaKey, properDecoratorF };
}

// 获取属性的元数据
export function getConfigMap<T>(
  target: any,
  cacheKey: symbol,
  metaKey: symbol
): Map<string, T> {
  if (target[cacheKey]) return target[cacheKey];
  const instance = new target({});
  // 获取到实例的所有属性
  const keys = Object.keys(instance);

  target[cacheKey] = keys.reduce((map, key) => {
    const config = Reflect.getMetadata(metaKey, instance, key);
    if (config) {
      map.set(key, config);
    }
    return map;
  }, new Map<string, T>());
  return target[cacheKey];
}
