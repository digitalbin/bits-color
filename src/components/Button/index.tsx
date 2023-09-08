import type { ButtonHTMLAttributes } from "react";
import s from "./styles.module.css";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...buttonProps } = props;
  return (
    <button
      className={`rounded text-white px-4 py-2 border border-neutral-300 ${s.button}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
