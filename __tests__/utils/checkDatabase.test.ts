import { checkDatabase } from "../../src/utils/checkDatabase";
import { describe, it, expect } from "@jest/globals";
describe("Check Database", () => {
  it("check", () => {
    const result = checkDatabase();
    const expectedValue = { message: "Database Present", present: true };
    expect(result).toEqual(expectedValue);
  });
});
