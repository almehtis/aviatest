import { Header } from "./Header";
import cn from "classnames";
import { Footer } from "./Footer";
import { memo, ReactNode } from "react";
import "./styles/Layout.css";

export const Layout = memo(function Layout(props: {
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("layout", props.className)}>
      <Header className={cn("relative z-30", props.className)} />
      {props.children}
      <Footer className={cn("relative z-20", props.className)} />
    </div>
  );
});
