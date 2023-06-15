import 'reflect-metadata'

const namespaceKey = Symbol("namespace")

export function namespace(name: string) {
    return ($class: Function) => {
        Reflect.defineMetadata(namespaceKey, name, $class)
    }
}

export function hasNamespace($class: Function) {
    return Reflect.hasOwnMetadata(namespaceKey, $class)
}

export function namespaceOf($class: Function) {
    return <string>Reflect.getOwnMetadata(namespaceKey, $class)
}