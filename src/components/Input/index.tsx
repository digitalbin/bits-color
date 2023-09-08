import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

export default function Input(props: Props) {
  const { isValid = true, ...rest } = props;
  return (
    <input
      className="px-4 py-2 w-full border border-neutral-300 rounded data-[valid=false]:outline-red-400 data-[valid=false]:border-red-400"
      data-valid={isValid}
      {...rest}
    />
  );
}
