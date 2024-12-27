import {
    ButtonColor,
    ButtonSize,
    ButtonType,
    ButtonVariant,
} from "@typing/atoms"

interface ButtonProps {
    id: string
    children?: string
    type?: ButtonType
    variant?: ButtonVariant
    color?: ButtonColor
    size?: ButtonSize
    onClick?: () => void
}

export default function Button({
    id,
    children,
    type = "generic",
    variant = "solid",
    color = "primary",
    size = "m",
    onClick,
}: ButtonProps) {
    const buttonBorderColor: Record<ButtonColor, string> = {
        primary:
            "border-light-brand dark:border-dark-brand hover:border-light-brand-hover dark:hover:border-dark-brand-hover",
        success:
            "border-light-positive-medium dark:border-dark-positive-medium hover:border-light-positive-heavy dark:hover:border-dark-positive-heavy",
        info: "border-light-info-medium dark:border-dark-info-medium hover:border-light-info-heavy dark:hover:border-dark-info-heavy",
        warning:
            "border-light-warning-medium dark:border-dark-warning-medium hover:border-light-warning-heavy dark:hover:border-dark-warning-heavy",
        danger: "border-light-danger-medium dark:border-dark-danger-medium hover:border-light-danger-heavy dark:hover:border-dark-danger-heavy",
        disabled: "border-light-line-generic dark:border-dark-line-generic",
    }
    const buttonTextColor: Record<ButtonColor, string> = {
        primary:
            "text-light-brand dark:text-dark-brand hover:text-light-brand-hover dark:hover:text-dark-brand-hover",
        success:
            "text-light-positive-medium dark:text-dark-positive-medium hover:text-light-positive-heavy dark:hover:text-dark-positive-heavy",
        info: "text-light-info-medium dark:text-dark-info-medium hover:text-light-info-heavy dark:hover:text-dark-info-heavy",
        warning:
            "text-light-warning-medium dark:text-dark-warning-medium hover:text-light-warning-heavy dark:hover:text-dark-warning-heavy",
        danger: "text-light-danger-medium dark:text-dark-danger-medium hover:text-light-danger-heavy dark:hover:text-dark-danger-heavy",
        disabled: "text-light-line-generic dark:text-dark-line-generic",
    }
    const buttonBackgroundColor: Record<ButtonColor, string> = {
        primary:
            "bg-light-brand dark:bg-dark-brand hover:bg-light-brand-hover dark:hover:bg-dark-brand-hover",
        success:
            "bg-light-positive-medium dark:bg-dark-positive-medium hover:bg-light-positive-heavy dark:hover:bg-dark-positive-heavy",
        info: "bg-light-info-medium dark:bg-dark-info-medium hover:bg-light-info-heavy dark:hover:bg-dark-info-heavy",
        warning:
            "bg-light-warning-medium dark:bg-dark-warning-medium hover:bg-light-warning-heavy dark:hover:bg-dark-warning-heavy",
        danger: "bg-light-danger-medium dark:bg-dark-danger-medium hover:bg-light-danger-heavy dark:hover:bg-dark-danger-heavy",
        disabled: "bg-light-line-generic dark:bg-dark-line-generic",
    }
    const buttonSize: Record<ButtonSize, string> = {
        s: "text-sm py-1 px-2",
        m: "text-base py-2 px-4",
        l: "text-lg py-4 px-8",
        xl: "text-xl py-8 px-16",
    }

    function getBorderColor() {
        if (variant === "text" || variant === "solid")
            return "border-transparent"
        else return `border-2 border-solid ${buttonBorderColor[color]}`
    }

    function getBackgroundColor() {
        if (variant === "text" || variant === "outline") return "bg-transparent"
        else return buttonBackgroundColor[color]
    }

    function getTextColor() {
        if (variant === "solid") return "text-black"
        else return buttonTextColor[color]
    }

    function getShadowStyle() {
        if (variant !== "text" && color !== "disabled")
            return "hover:shadow active:shadow hover:shadow-light-shadow-medium dark:hover:shadow-dark-shadow-medium active:shadow-light-shadow-veil dark:active:shadow-dark-shadow-veil"
        else return ""
    }

    function ifDisabled() {
        if (color !== "disabled") return ""
        else "opacity-50"
    }

    return (
        <button
            className={`w-full rounded-lg px-4 ${getBorderColor()} ${getBackgroundColor()} ${getTextColor()} ${buttonSize[size]} ${getShadowStyle()} ${ifDisabled()}`}
            id={id}
            type={type === "submit" ? type : "button"}
            onClick={onClick}
            disabled={color === "disabled"}
        >
            {children}
        </button>
    )
}
