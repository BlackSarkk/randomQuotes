export const iconSizeVariants = {
    xs: "size-8",
    sm: "size-10 text-2xl",
    md: "size-12 text-3xl",
    lg: "size-16 text-4xl", 
    xl: "size-18 text-5xl"
}

export interface IconProps {
    size: keyof typeof iconSizeVariants;
}