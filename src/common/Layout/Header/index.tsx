import { memo } from "react";
import { Logo } from "../Logo";

export const Header = memo(function Header(props: { className?: string }) {
  return (
    <header className={props.className}>
      <Logo />
    </header>
  );
});
