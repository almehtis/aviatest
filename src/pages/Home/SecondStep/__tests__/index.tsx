import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../../../store";
import { SecondStep } from "..";
import { BrowserRouter } from "react-router-dom";

describe("FirstStep component", () => {
  it("renders properly", () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <SecondStep />
        </Provider>
      </BrowserRouter>
    );
  });
});
