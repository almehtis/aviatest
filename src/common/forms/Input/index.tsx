import cn from "classnames";
import { EmailFormValue } from "../../types";
import { InputHTMLAttributes, memo } from "react";
import { UseFormRegister } from "react-hook-form";

export const Input = memo(function Input(props: {
  className?: string;
  id: string;
  inputClassName?: string;
  disabled?: boolean;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  register?: ReturnType<UseFormRegister<EmailFormValue>>;
}) {
  return (
    <label className={props.className}>
      <input
        {...props.register}
        className={cn("email-input", props.inputClassName)}
        id={props.id}
        disabled={props.disabled}
        type={props.type ?? "email"}
      />
    </label>
  );
});
