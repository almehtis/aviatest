import { memo } from "react";
import { Layout } from "../../common/Layout";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import "./styles/Home.css";

export const Home = memo(function Home() {
  return (
    <Layout>
      <div className="steps-container">
        <span className="home-title">Чтобы выиграть путешествие</span>
        <FirstStep />
        <SecondStep />
      </div>
    </Layout>
  );
});
