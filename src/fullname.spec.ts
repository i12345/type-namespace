import { describe, it } from 'mocha'
import { assert } from 'chai'
import { namespace } from './namespace.js'
import { fullname } from './fullname.js'

describe("fullname", () => {
    it("should equal ns::A when namespace is set", () => {
        const ns = "abc"

        @namespace(ns)
        class A {
        }

        assert.equal(fullname(A), `${ns}::A`)
    })

    it("should not equal ns::A when namespace set on base class", () => {
        const ns = "abc"

        @namespace(ns)
        class A {
        }

        class B extends A {
        }

        assert.notEqual(fullname(B), `${ns}::B`)
    })

    it("should return plain constructor name when namespace not set", () => {
        class C {
        }

        assert.equal(fullname(C), "C")
    })
})