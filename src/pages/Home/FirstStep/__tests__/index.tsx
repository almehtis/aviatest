import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../../../store";
import { FirstStep } from "..";
import { BrowserRouter } from "react-router-dom";

describe("FirstStep component", () => {
  it("renders properly", () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <FirstStep />
        </Provider>
      </BrowserRouter>
    );
  });
});
