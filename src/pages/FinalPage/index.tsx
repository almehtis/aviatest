import { memo } from "react";
import { Header } from "../../common/Layout/Header";
import "./styles/FinalPage.css";

export const FinalPage = memo(function FinalPage(props: {
  className?: string;
}) {
  return (
    <div className="background">
      <div className="pants">
        <Header />
        <p className="title">
          <span>Выборы&nbsp;</span>
          <br />
          <span>путешествие&nbsp;</span>
          <br />
          <span>близко!&nbsp;</span>
          <br />
        </p>
      </div>
    </div>
  );
});
