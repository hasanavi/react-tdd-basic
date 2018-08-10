import { max_number } from "./index";

describe("max_number", () => {
	describe("given an empty array", () => {
		it("returns 0", () => {
			expect(max_number([])).toEqual(0);
		});
	});

	describe("given an array of numbers", () => {
		it("returns an max number", () => {
			expect(max_number([1, 2, 4])).toEqual(4);
		});
	});
});
