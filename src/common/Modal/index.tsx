import { Fragment, memo, useCallback, useEffect, useRef } from "react";
import cn from "classnames";
import ReactDom from "react-dom";
import "./styles/Modal.css";

export const Modal = memo(function Modal(props: {
  className?: string;
  link: string;
  close: VoidFunction;
  submit: VoidFunction;
  isOpen: boolean;
}) {
  const closeListener = useCallback(
    (event: KeyboardEvent) => {
      const close = props.close;

      if (event.key === "Escape") {
        close();
      }
    },
    [props.close]
  );

  const referenceCloseListener = useRef(closeListener);

  // Close on escape
  useEffect(() => {
    document.removeEventListener("keydown", referenceCloseListener.current);
    referenceCloseListener.current = closeListener;
  }, [closeListener]);

  // Add/remove event listener on mount/unmount
  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("keydown", referenceCloseListener.current);
      return;
    }

    document.removeEventListener("keydown", referenceCloseListener.current);
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  return ReactDom.createPortal(
    <Fragment>
      <div onClick={props.close} className="overlay" />

      <div className={cn("modal-window", props.className)}>
        <h3>Отправь ссылку друзьям</h3>
        <span>{props.link}</span>

        <button
          className="modal-window__button "
          onClick={props.close}
          type="button"
        >
          Отмена
        </button>

        <button
          className="modal-window__button "
          onClick={props.submit}
          type="button"
        >
          Поделиться
        </button>
      </div>
    </Fragment>,

    document.getElementById("portal") as HTMLFormElement
  );
});
