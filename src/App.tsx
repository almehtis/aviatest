import { Fragment, StrictMode, useEffect } from "react";
import { FinalPage } from "./pages/FinalPage";
import { Home } from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./assets/global.css";
import { getVisitor, insertVisitor } from "./common/helpers";
import { useAppSelector } from "./hooks";

function App() {
  const linkIsShared = useAppSelector(
    (state) => state.shareStatus.isLinkShared
  );
  const emailIsShared = useAppSelector(
    (state) => state.shareStatus.isEmailShared
  );
  const navigate = useNavigate();

  // If coockies exist display user info in the console, otherwise insert data in the table
  useEffect(() => {
    if (!Cookies.get("visitor")) {
      insertVisitor();
      Cookies.set("visitor", "visited", { expires: 1 });
    } else {
      getVisitor();
    }
  }, []);

  //If link and email are shared redirects to the final page
  useEffect(() => {
    if (linkIsShared && emailIsShared) {
      navigate("/final");
    }
  });

  // You cant just navigate to the final page
  return (
    <Fragment>
      <StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          {linkIsShared && emailIsShared && (
            <Route path="/final" element={<FinalPage />} />
          )}
        </Routes>
      </StrictMode>
    </Fragment>
  );
}

export default App;
