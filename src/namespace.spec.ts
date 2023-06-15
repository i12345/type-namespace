import { describe, it } from 'mocha'
import { assert } from 'chai'
import { hasNamespace, namespace, namespaceOf } from './namespace.js'

describe("namespaceOf", () => {
    it("should equal when set", () => {
        const ns = "abc"

        @namespace(ns)
        class A {
        }

        assert.equal(namespaceOf(A), ns)
    })

    it("should not equal when set on base class", () => {
        const ns = "abc"

        @namespace(ns)
        class A {
        }

        class B extends A {
        }

        assert.notStrictEqual(namespaceOf(B), ns)
    })

    it("should equal different value than base class", () => {
        const ns = "abc"

        @namespace(`not ${ns}`)
        class A {
        }

        @namespace(ns)
        class B extends A {
        }

        assert.notEqual(namespaceOf(B), namespaceOf(A))
    })

    it("should return undefined when not set", () => {
        class C {
        }

        assert.isTrue(namespaceOf(C) === undefined)
    })
})

describe("hasNamespace", () => {
    it("should report true when namespace set", () => {
        const ns = "abc"

        @namespace(ns)
        class C {
        }

        assert.isTrue(hasNamespace(C))
    })

    it("should return false when namespace not set", () => {
        class C {
        }

        assert.isFalse(hasNamespace(C))
    })

    it("should return false when namespace set only on base class", () => {
        const ns = "abc"

        @namespace(ns)
        class C {
        }

        class D extends C {
        }

        assert.isFalse(hasNamespace(D))
    })
})