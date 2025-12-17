import { test } from "node:test";
import { equal } from "node:assert";

const sum = (a, b) => a + b;
console.log(sum(10, 2));

test("sum shold return correct result", () => {
  equal(sum(1, 1), 2);
  equal(sum(-1, 1), 0);
});
