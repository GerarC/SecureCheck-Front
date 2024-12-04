import { createTheme, styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

/**
 * A palette to give a unique visual to the application
 * Credits for: https://lospec.com/palette-list/indecision
 */
const palette = {
    darkIndigo: "#2f2b5c",
    royalBlue: "#4b3b9c",
    wineRed: "#57253b",
    roseRed: "#94353d",
    terracotta: "#d46e33",
    goldenOrange: "#f2b63d",
    softPeach: "#ffd4a3",
    softCream: "#fff4e0",
    seaGreen: "#8fcccb",
    teal: "#449489",
    deepTeal: "#285763",
    oliveGreen: "#6d8c32",
    mustardYellow: "#b4ba47",
    dustyRose: "#9c656c",
    cocoa: "#d1b48c",
};

export const theme = createTheme({
    palette: {
        background: {
            main: palette.darkIndigo,
            default: palette.darkIndigo,
        },
        primary: {
            main: palette.darkIndigo,
            light: palette.royalBlue,
            contrastText: palette.softCream,
        },
        secondary: {
            main: palette.mustardYellow,
            light: palette.goldenOrange,
            contrastText: palette.darkIndigo,
        },
        success: {
            main: palette.oliveGreen,
            light: `${palette.oliveGreen}EE`,
        },
        warning: {
            main: palette.mustardYellow,
            light: palette.goldenOrange,
        },
        error: {
            main: palette.roseRed,
            light: `${palette.roseRed}CC`,
        },
        info: {
            main: palette.royalBlue,
            light: palette.softCream,
        },
    },
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
        fontSize: 14,
        h1: {
            fontWeight: 700,
            color: palette.darkIndigo ,
        },
        h2: {
            fontWeight: 600,
            color: palette.darkIndigo,
        },
        h3: {
            fontWeight: 500,
            color: palette.darkIndigo,
        },
        h4: {
            fontWeight: 500,
            color: palette.darkIndigo,
        },
        body1: {
            fontWeight: 400,
            color: palette.darkIndigo,
        },
        body2: {
            fontWeight: 400,
            color: palette.darkIndigo,
        },
    },
    spacing: (factor) => `${0.25 * factor}rem`,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "@font-face": {
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontDisplay: "swap",
                    src: "url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap)",
                },
                body: {
                    backgroundColor: palette.darkIndigo,
                    color: palette.softCream,
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 4,
                    padding: "8px 16px", 
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                    },
                },
                outlined: {
                    borderWidth: 2,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                },
                input: {
                    padding: "8px",
                },
            },
        },
       
    },
});

// Custom styled notification component
export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
    ({ theme }) => ({
        "&.notistack-MuiContent-success": {
            backgroundColor: theme.palette.success.main,
            color: palette.softCream,
        },
        "&.notistack-MuiContent-error": {
            backgroundColor: theme.palette.error.main,
            color: palette.softCream,
        },
        "&.notistack-MuiContent-warning": {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.primary.main,
        },
        "&.notistack-MuiContent-info": {
            backgroundColor: theme.palette.info.main,
            color: palette.softCream,
        },
    }),
);
