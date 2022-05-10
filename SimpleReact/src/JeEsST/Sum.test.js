const sum = require('./Sum');

test("my first case" , () => {
    expect(sum(5,5)).toBe(10);
})

test("my first case" , () => {
    let dta = 10
    expect(dta).toBe(10);
})

it("my first case" , () => {
    let dta = 10
    expect(dta).toBe(10);
})

describe("Upadte" , () => {
    test("my first case" , () => {
        expect(sum(5,5)).toBe(10);
    })
    
    test("my first case" , () => {
        let dta = 10
        expect(dta).toBe(10);
    })
    
    it("my first case" , () => {
        let dta = 10
        expect(dta).toBe(10);
    })
})