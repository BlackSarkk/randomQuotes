type Variant = "quote" | "author";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface TextProps {
  texts: string;
  variant: Variant;
  size: Size;
}

const defaultStyles = " flex justify-center items-center tracking-wide font-instrument text-center font-bold";

const VariantStyles = {
  quote: " text-[#171A1F] font-instrument ",
  author: " text-[#565D6D] font-libre ",
}

const sizeStyles = {
  xs: "  text-xs",
  sm: "  text-[1.875rem]",
  md: "  text-md",
  lg: "  text-lg",
  xl: "  text-[2.6rem]/[2.5rem]",
}


const TextBox = (props: TextProps) => {
  return (
    <div
      className={`
      ${defaultStyles}
      ${VariantStyles[props.variant]}
      ${sizeStyles[props.size]}
      `}
    >
      {props.texts ? <span>{props.texts}</span> : null}
    </div>
  );
};

export default TextBox;
