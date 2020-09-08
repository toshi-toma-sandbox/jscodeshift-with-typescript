// @ts-ignore
import { defineTest } from "jscodeshift/dist/testUtils";

describe("test with .js file", () => {
  defineTest(__dirname, "transform", null, "foobar");
});

describe("test with .ts file", () => {
  defineTest(__dirname, "transform", null, "foobar", { parser: "ts" });
});
