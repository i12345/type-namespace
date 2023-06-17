import { hasNamespace, namespaceOf } from "./namespace.js";

export function fullname(type: Function) {
    if(hasNamespace(type))
        return `${namespaceOf(type)}::${type.name}`
    else return type.name
}