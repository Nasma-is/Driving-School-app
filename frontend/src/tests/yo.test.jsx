import { describe, it, expect } from "vitest";

describe ("Example Suite" , () => {
    it("should pass" , () => {
        const sum = 2 + 1
        expect(sum).toEqual(3)
    } )
})