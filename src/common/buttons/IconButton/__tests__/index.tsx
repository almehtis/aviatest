import { render } from "@testing-library/react";
import { IconButton } from "../index";

describe("IconButton component", () => {
  it("renders properly", () => {
    render(
      <IconButton
        id="test"
        buttonClassName="test"
        iconName="test"
        heartClassName="test"
        iconClassName="test"
        disabled
        onClick={() => {}}
      />
    );
  });
});
