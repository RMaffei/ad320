export function identity<T>(value: T): T {
    return value;
  }
  
  export function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
  }
  
  export function mapObject<K extends string | number | symbol, V, U>(
    obj: Record<K, V>,
    mapFn: (value: V) => U
  ): Record<K, U> {
    const result: Record<K, U> = {} as Record<K, U>;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = mapFn(obj[key]);
      }
    }
    return result;
  }
  
  export function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
    return array.filter(predicate);
  }  