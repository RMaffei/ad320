export function SimpleLogger<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(`Creating instance of ${constructor.name} with arguments:`, args);
        console.log('Class properties:', this);
      }
    }
  }
  
  export function LogMethod(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${String(propertyKey)} with arguments:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Result of ${String(propertyKey)}:`, result);
      return result;
    };
  
    return descriptor;
  }
  
  export function MyReadOnly(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if ('value' in descriptor) {
      descriptor.writable = false;
    } else {
      descriptor.set = undefined;
    }
    console.log(`Making ${propertyKey} read-only`);
    return descriptor;
  }  