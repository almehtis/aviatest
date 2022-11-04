import cn from "classnames";
import { memo } from "react";
import { Icon } from "../../Icon";
import "./styles/IconButton.css";

export const IconButton = memo(function IconButton(props: {
  buttonClassName?: string;
  heartClassName?: string;
  iconClassName?: string;
  iconName: string;
  id: string;
  disabled?: boolean;
  onClick?: VoidFunction;
}) {
  return (
    <button
      className={cn("icon-button", props.buttonClassName)}
      disabled={props.disabled}
      id={props.id}
      onClick={props.onClick}
    >
      <Icon
        className={cn("icon-button__heart", props.heartClassName)}
        name="heart"
      />
      <Icon
        className={cn("icon-button__icon", props.iconClassName)}
        name={props.iconName}
      />
    </button>
  );
});
