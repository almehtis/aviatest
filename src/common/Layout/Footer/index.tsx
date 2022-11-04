import { memo } from "react";
import "./styles/Footer.css";

export const Footer = memo(function Footer(props: {
  className?: string;
  isFooterDivided?: boolean;
}) {
  return (
    <footer className={props.className}>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=ML5UI-0JS_Q"
        rel="noreferrer"
      >
        Кликни и забери приз
      </a>
    </footer>
  );
});
