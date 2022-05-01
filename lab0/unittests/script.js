window.onload = function() {
    tester();
}

function tester() {
    describe("sum", function() {
        it("returns the sum of 5 + 6", function() {});
        assert.equal(sum(5+6), 11);
        // assert.isNaN(sum(5+"6"), 15);
    });

    describe("substract", function() {
        it("returns the sub of 5 + 6", function() {});
        assert.equal(sub(5+6), 11);
        // assert.isNaN(sub(5+"6"), 15);
    });

    mocha.run();
}

function sum(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (a - b);
}