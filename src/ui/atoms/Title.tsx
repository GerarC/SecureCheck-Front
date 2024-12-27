import { TitleAlignment, TitleLevel, TitleSize } from "@typing/atoms"
import { ReactNode } from "react"

interface TitleProps {
    level?: TitleLevel
    size?: TitleSize
    alignment?: TitleAlignment
    children: ReactNode
}
export default function Title({
    children,
    level = 1,
    size = "m",
    alignment = "left",
}: TitleProps) {
    const TitleTag = `h${level}` as keyof React.JSX.IntrinsicElements
    const sizeStyles: Record<TitleSize, string> = {
        xs: "text-base",
        s: "text-lg",
        m: "text-xl",
        l: "text-2xl",
        xl: "text-4xl",
    }
    const textAlignment: Record<TitleAlignment, string> = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }

    return (
        <TitleTag
            className={` font-bold ${sizeStyles[size]} ${textAlignment[alignment]}`}
        >
            {children}
        </TitleTag>
    )
}
