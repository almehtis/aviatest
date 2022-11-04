import { memo } from "react";
import "./styles/Logo.css";

export const Logo = memo(function Logo() {
  return (
    <a href="/">
      <img
        className="desktop-logo"
        src="/icons/logo.svg"
        alt="Aviaselaes logo"
      />
      <img
        className="mobile-logo"
        src="/icons/mobile-logo.svg"
        alt="Aviaselaes mobile logo"
      />
    </a>
  );
});
