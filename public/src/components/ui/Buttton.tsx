import type { ReactElement } from "react";

type Varients = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  varient: Varients;
  size: "xs" | "sm" | "md" | "lg";
  text?: string ;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const defaultStyles = " flex cursor-pointer justify-center items-center font-libre tracking-wide";

const varientStyles = {
  primary: " bg-darkGreen-500 text-white font-bold hover:bg-darkGreen-600",
  secondary: " bg-transparent text-[#171A1F] font-semibold hover:bg-ligthGreen-200",
  tertiary: " bg-transparent text-[#171A1F] font-semibold",
};

const sizeStyles = {
  xs: "py-1 px-1 rounded-sm text-xs",
  sm: "py-2 px-2 rounded-md text-lg",
  md: "py-3 px-3 rounded-lg",
  lg: "py-4 px-20 rounded-xl text-xl tracking-wide",
};

const Buttton = (props: ButtonProps) => {
  return (
    <button
      className={`
    ${defaultStyles}
    ${varientStyles[props.varient]}
    ${sizeStyles[props.size]}
    `}
      onClick={props.onClick}
    >

      {props.startIcon ? <span>{props.startIcon}</span> : null}
      {props.text ? <span>{props.text}</span> : null}
      {props.endIcon ? <span>{props.endIcon}</span> : null}
    </button>
  );
};

export default Buttton;
