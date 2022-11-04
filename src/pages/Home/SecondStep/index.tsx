import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { shareEmail } from "../../../store/shareSlice/shareSlice";
import { Input } from "../../../common/forms/Input";
import { EmailFormValue } from "../../../common/types";
import * as yup from "yup";
import "./styles/SecondStep.css";
import { SubmitButton } from "../../../common/buttons";

const id = 1;
const schema = yup.object({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
});

export const SecondStep = memo(function SecondStep(props: {
  className?: string;
}) {
  const emailIsShared = useAppSelector(
    (state) => state.shareStatus.isEmailShared
  );
  const dispatch = useAppDispatch();

  const {
    formState: { isValid, dirtyFields },
    handleSubmit,
    trigger,
    register,
  } = useForm<EmailFormValue>({
    defaultValues: {
      email: "",
    },

    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // I didnt place the navigate function in the useEffect hook so you can check that all forms are disabled
  const submit = useCallback(
    async (data: EmailFormValue) => {
      try {
        await fetch(`http://localhost:8080/visitor/${id}/email`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: 1,
            email: data.email,
          }),
        });

        dispatch(shareEmail(true));
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error);
        } else {
          console.log(error);
        }
      }
    },
    [dispatch]
  );

  return (
    <div className="second-step-container">
      <span
        className={
          !emailIsShared
            ? "second-step-container__title active"
            : "second-step-container__title inactive"
        }
      >
        Оставь почту:
      </span>
      <form
        action=""
        className={!emailIsShared ? "form active" : "form inactive"}
        id="form"
        onSubmit={handleSubmit(submit)}
      >
        <Input
          id="input"
          inputClassName="form__input"
          register={register("email", {
            onChange: async () => await trigger("email"),
          })}
        />

        <SubmitButton
          disabled={dirtyFields && !isValid}
          className={
            emailIsShared ? "send-email-button--hidden" : "send-email-button"
          }
        />
      </form>
    </div>
  );
});
