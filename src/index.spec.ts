import { atm, Withdrawal } from ".";

test("Delivers one banknote when the desired amount equals its face value", () => {
  // GIVEN
  const desiredAmount = 10;

  // WHEN
  const actual = atm(desiredAmount);

  // THEN
  const expected: Withdrawal = {
    10: 1,
    20: 0,
    50: 0,
    100: 0,
    200: 0,
    500: 0,
  };

  expect(actual).toEqual(expected);
});

test("Delivers one banknote when the desired amount equals its face value [TRIANGULATION]", () => {
  // GIVEN
  const desiredAmount = 20;

  // WHEN
  const actual = atm(desiredAmount);

  // THEN
  const expected: Withdrawal = {
    10: 0,
    20: 1,
    50: 0,
    100: 0,
    200: 0,
    500: 0,
  };
  expect(actual).toEqual(expected);
});

test("Delivers one banknote when the desired amount equals its face value [TRIANGULATION]", () => {
  // GIVEN
  const desiredAmount = 500;

  // WHEN
  const actual = atm(desiredAmount);

  // THEN
  const expected: Withdrawal = {
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0,
    500: 1,
  };
  expect(actual).toEqual(expected);
});

test("Delivers twice the banknote when the desired amount equals twice its face value", () => {
  // GIVEN
  const desiredAmount = 40;

  // WHEN
  const actual = atm(desiredAmount);

  // THEN
  const expected: Withdrawal = {
    10: 0,
    20: 2,
    50: 0,
    100: 0,
    200: 0,
    500: 0,
  };
  expect(actual).toEqual(expected);
});

test("Delivers twice the banknote when the desired amount equals twice its face value [TRIANGULATION]", () => {
  // GIVEN
  const desiredAmount = 400;

  // WHEN
  const actual = atm(desiredAmount);

  // THEN
  const expected: Withdrawal = {
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 2,
    500: 0,
  };
  expect(actual).toEqual(expected);
});
test("Delivers twice the banknote when the desired amount equals twice its face value [TRIANGULATION]", () => {
  // GIVEN
  const desiredAmount = 400;

  // WHEN
  const actual = atm(desiredAmount);

  // THEN
  const expected: Withdrawal = {
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 2,
    500: 0,
  };
  expect(actual).toEqual(expected);
});

test("Delivers a minimal amount of banknotes proceeding recursively", () => {
  // GIVEN
  const desiredAmount = 150;

  // WHEN
  const actual = atm(desiredAmount);

  // THEN
  const expected: Withdrawal = {
    10: 0,
    20: 0,
    50: 1,
    100: 1,
    200: 0,
    500: 0,
  };
  expect(actual).toEqual(expected);
});

test("Throws an error when the desired amount is not a multiple of 10", () => {
  // GIVEN
  const desiredAmount = 9;

  // WHEN
  expect(() => atm(desiredAmount)).toThrowError("Desired amount must be a multiple of 10");
});

test("Throws an error when the desired amount is not a multiple of 10 - triangulation", () => {
  // GIVEN
  const desiredAmount = 11;

  // WHEN
  expect(() => atm(desiredAmount)).toThrowError("Desired amount must be a multiple of 10");
});
