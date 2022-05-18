import divide from "./B";

test('additon check kr rha', () => {
//   const result = divide(10,2);
//   expect(result).toEqual(20);
    expect(divide()).toEqual({name: "Ankit"})
});

describe("Additon" , () => {
    test('additon check kr rha', () => {
        expect(2+3).toBe(5);
    });
})

describe("Multiply" , () => {
    test('multiply check kr rha', () => {
        expect(2 * 3).toBe(6);
    });
})

describe("Divide" , () => {
    test('divide check kr rha', () => {
        expect(10/2).toBe(5);
    });
})