const { fromDollarToYen, fromEuroToDollar, fromYenToPound, oneEuroIs } = require('./app');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD;
    expect(dollars).toBe(expected);
});

test("Ten dollars should be a certain amount of yen", function() {
    const yen = fromDollarToYen(10);
    const expected = (10 / oneEuroIs.USD) * oneEuroIs.JPY;
    expect(yen).toBe(expected);
});

test("One thousand yen should be a certain amount of pounds", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / oneEuroIs.JPY) * oneEuroIs.GBP;
    expect(pounds).toBe(expected);
});