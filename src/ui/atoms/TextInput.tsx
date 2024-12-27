import { ChangeEvent, ReactNode } from "react"
import {
    TextInputMode,
    TextInputSize,
    TextInputVariant,
} from "@typing/atoms"

interface TextInputProps {
    id: string
    placeholder: string
    label?: string
    icon?: ReactNode
    variant?: TextInputVariant
    size?: TextInputSize
    mode?: TextInputMode
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({
    id,
    placeholder,
    label,
    icon,
    variant = "text",
    size = "m",
    mode = "text",
    disabled = false,
    onChange,
}: TextInputProps) {
    function getSizeStyle(size: TextInputSize): string {
        let padding = {
            s: "p-1 pl-2",
            m: "p-2 pl-4",
            l: "p-3 pl-6",
            xl: "p-4 pl-8",
        }
        if (icon)
            padding = {
                s: "p-1 pl-7",
                m: "p-2 pl-9",
                l: "p-3 pl-11",
                xl: "p-4 pl-14",
            }
        const sizeStyles: Record<TextInputSize, string> = {
            s: `${padding["s"]} text-sm`,
            m: `${padding["m"]} text-base`,
            l: `${padding["l"]} text-lg`,
            xl: `${padding["xl"]} text-2xl`,
        }
        return sizeStyles[size]
    }

    function getLabelSizeStyle(size: TextInputSize): string {
        const sizeStyles: Record<TextInputSize, string> = {
            s: "text-sm",
            m: "text-base",
            l: "text-lg",
            xl: "text-2xl",
        }
        return sizeStyles[size]
    }

    function getIconSize(size: TextInputSize): string {
        const sizeStyles: Record<TextInputSize, string> = {
            s: "w-4",
            m: "w-6",
            l: "w-8",
            xl: "w-10",
        }
        return sizeStyles[size]
    }

    function getDisabledStyle(disabled: boolean) {
        return disabled
            ? "cursor-not-allowed opacity-50 bg-light-line-generic dark:bg-dark-line-generic"
            : ""
    }

    return (
        <div className="flex flex-col w-full">
            {label ? (
                <label
                    htmlFor={id}
                    className={`
                        ${getLabelSizeStyle(size)}
                        bg-transparent
                        font-bold
                    `}
                >
                    {label}
                </label>
            ) : (
                <></>
            )}
            <div className="relative w-full">
                {icon ? (
                    <div
                        className={`
                            ${getIconSize(size)}
                            h-full
                            absolute
                            left-2
                            dark:filter
                            dark:invert 
                            inset-y-0 
                            flex
                            items-center
                            pointer-events-none
                        `}
                    >
                        {icon}
                    </div>
                ) : (
                    <></>
                )}
                <input
                    id={id}
                    type={variant}
                    className={`
                        w-full
                        bg-light-background
                        dark:bg-dark-background
                        border
                        border-solid
                        rounded-md
                        focus:outline-none
                        focus:ring-2
                        border-light-line-generic
                        hover:border-light-line-hover
                        active:border-light-line-active 
                        dark:border-dark-line-generic
                        dark:hover:border-dark-line-hover
                        dark:active:border-dark-line-active
                        ${getSizeStyle(size)}
                        ${getDisabledStyle(disabled)}
                    `}
                    placeholder={placeholder}
                    disabled={disabled}
                    inputMode={mode}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}
