import { memo } from "react";

const iconNames = ["done", "facebook", "heart", "ok", "vk", "tw"] as const;

export type IconType = typeof iconNames[number];

export const Icon = memo(function Icon(props: {
  className?: string;
  name: string;
}) {
  return (
    <img
      className={props.className}
      src={`../../icons/${props.name}.svg`}
      alt=""
    />
  );
});
