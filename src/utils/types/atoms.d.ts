// Title
export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6
export type TitleSize = "xs" | "s" | "m" | "l" | "xl"
export type TitleAlignment = "left" | "center" | "right"

// Text Input
export type TextInputSize = "s" | "m" | "l" | "xl"
export type TextInputVariant = "text" | "password"
export type TextInputMode =
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"

// Button
export type ButtonType = "submit" | "generic"
export type ButtonVariant = "solid" | "outline" | "text"
export type ButtonColor = "primary" | "danger" | "warning" | "info" | "success" | "disabled"
export type ButtonSize = "s" | "m" | "l" | "xl"
