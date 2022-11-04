import { render } from "@testing-library/react";
import { Icon } from "../index";

describe("Icon component", () => {
  it("renders properly", () => {
    render(<Icon className="test" name="test" />);
  });
});
