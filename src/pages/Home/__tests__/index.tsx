import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../../store";
import { Home } from "..";
import { BrowserRouter } from "react-router-dom";

describe("FirstStep component", () => {
  it("renders properly", () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
  });
});
