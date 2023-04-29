import { getPercents } from "./index.js";

describe("tests for getPercents func", () => {
    it("30 % of 200 is equal to 60", () => {
        expect(getPercents(30,200)).toBe(60);
    }),
    it("0.3 % of 200 is equal to 0.6", () => {
        expect(getPercents(0.3,200)).toBe(0.6);
    }),
    it("30 % of string is equal to NaN", () => {
        expect(getPercents(30,'string')).toBe(NaN);
    }),
    it("no parameters", () => {
        expect(getPercents()).toBe(NaN);
    })/*, 
    it("Hello world", () => {
        expect(getPercents('Hello', 'world')).toBe('Hello world');
    });*/
});