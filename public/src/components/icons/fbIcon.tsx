import { type IconProps, iconSizeVariants } from ".";

export const FB = (prop: IconProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconSizeVariants[prop.size]}
    >
      <path
        d="M10.5 15.8944V25.2H15.575V15.8944H19.3594L20.1469 11.6157H15.575V10.1019C15.575 7.84005 16.4632 6.9738 18.7557 6.9738C19.4688 6.9738 20.0419 6.9913 20.3744 7.0263V3.14567C19.7488 2.97505 18.2175 2.80005 17.3338 2.80005C12.6569 2.80005 10.5 5.00942 10.5 9.7738V11.6157H7.61255V15.8944H10.5Z"
        fill="black"
      />
    </svg>
  );
};
