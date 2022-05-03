mocha.setup('bdd'); // initialize mocha
let assert = chai.assert; // chai has a lot of stuff, let's make assert global

describe("sum", function () {
    it("returns total sum 45 if given array", () => {
        const arr = [1,2,3,4,5,6,7,8,9];
        const expected = 45; //362880
        assert.equal(summ(arr), expected);
    });
});

describe("multiply", function () {
    it("returns total mul 362880 if given array", () => {
        const arr = [1,2,3,4,5,6,7,8,9];
        const expected = 362880
        assert.equal(mul(arr), expected);
    });
});

describe("reverse", function () {
    it("returns reversed array integer", () => {
        const arr = [1,2,3,4,5,6,7,8,9];
        const expected = [9,8,7,6,5,4,3,2,1];
        assertEqualArrays(reverse(arr), expected);
    });
});

describe("reverse", function () {
    it("returns reversed array strings", () => {
        const arr = ["a","b","c","d","e"];
        const expected = ["e", "d", "c", "b", "a"];
        assertEqualArrays(reverse(arr), expected);
    });
});

describe("reverse", function () {
    it("returns reversed empty array strings", () => {
        const arr = [];
        assertEqualArrays(reverse(arr), []);
    });
});

describe("filterLongWords", function () {
    it("returns true if given array and 4 as argument", () => {
        const arr = ["aaa","aaaaaaaaaa","aaa","a","aaaaa"];
        const expected = ["aaaaaaaaaa", "aaaaa"];
        assertEqualArrays(filterLongWords(arr), expected);
    });
});

describe("filterLongWords", function () {
    it("returns true if given empry arrays", () => {
        const arr = ["aaa","aaaaaaaaaa","aaa","a","aaaaa"];
        const expected = ["aaaaaaaaaa", "aaaaa"];
        assertEqualArrays(filterLongWords(arr), expected);
    });
});