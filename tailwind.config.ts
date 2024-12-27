/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                light: {
                    background: "#FFFFFF",
                    brand: "#FFBE5C",
                    "brand-hover": "#E9AE56",
                    selection: "#FFBE5C4D",
                    "selection-hover": "#FFBE5C80",
                    text: {
                        primary: "#000000D9",
                        complementary: "#000000B2",
                        secondary: "#00000080",
                        brand: "#DB8E4B",
                        "brand-heavy": "#DB5C0A",
                    },
                    info: {
                        light: "#3697F180",
                        medium: "#348BDC",
                        heavy: "#3072B3",
                    },
                    positive: {
                        light: "#32BA764D",
                        medium: "#30AA6E",
                        heavy: "#2D8B5D",
                    },
                    warning: {
                        light: "#FFBE5CB2",
                        medium: "#FFBE5C",
                        heavy: "#D39E50",
                    },
                    danger: {
                        light: "#FF003C80",
                        medium: "#E9033A",
                        heavy: "#BD0935",
                    },
                    line: {
                        generic: "#0000001A",
                        hover: "#00000026",
                        active: "#0000004D",
                        accent: "#00000026",
                        "accent-hover": "#0000004D",
                    },
                    shadow: {
                        veil: "#00000040",
                        light: "#0000000D",
                        medium: "#00000026",
                        heavy: "#00000080",
                        fade: "#FFFFFF4D",
                    }
                },
                dark: {
                    background: "#221D22",
                    brand: "#FFBE5C",
                    "brand-hover": "#FFCB7D",
                    selection: "#FFBE5C33",
                    "selection-hover": "#FFBE5C4D",
                    text: {
                        primary: "#FFFFFF",
                        complementary: "#FFFFFFD9",
                        secondary: "#FFFFFFB2",
                        brand:  "#FFC56C",
                        "brand-heavy": "#FFD28D",
                    },
                    info: {
                        light: "#3697F180",
                        medium: "#4AA1F2",
                        heavy: "#72B6F5",
                    },
                    positive: {
                        light: "#4DB09B80",
                        medium: "#5FB8A5",
                        heavy: "#82C8B9",
                    },
                    warning: {
                        light: "#FFBE5C80",
                        medium: "#FFC56C",
                        heavy: "#FFD28D",
                    },
                    danger: {
                        light: "#E5325DB2",
                        medium: "#E8476D",
                        heavy: "#ED708E",
                    },
                    line: {
                        generic: "#FFFFFF26",
                        hover: "#FFFFFF40",
                        active: "#FFFFFF4D",
                        accent: "#FFFFFF26",
                        "accent-hover": "#FFFFFF4D",
                    },
                    shadow: {
                        veil: "#00000099",
                        light: "#00000033",
                        medium: "#00000033",
                        heavy: "#00000080",
                        fade: "#FFFFFF40",
                    }
                },
            },
        },
    },
    plugins: [],
}
