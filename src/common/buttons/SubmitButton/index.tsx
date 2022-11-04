import { memo } from "react";

export const SubmitButton = memo(function SubmitButton(props: {
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button className={props.className} disabled={props.disabled} type="submit">
      Отправить
    </button>
  );
});
