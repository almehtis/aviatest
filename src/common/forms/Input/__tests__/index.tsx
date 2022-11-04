import { render } from "@testing-library/react";
import { Input } from "../index";

describe("Input component", () => {
  it("renders properly", () => {
    render(
      <Input
        id="test"
        className="test"
        inputClassName="test"
        disabled
        type="test"
      />
    );
  });
});
