import { createTheme, styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

// Define color palette
const palette = {
    darkBlue: "#0d2b45",
    midBlue: "#203c56",
    greyPurple: "#544e68",
    mauve: "#8d697a",
    burntOrange: "#d08159",
    lightOrange: "#ffaa5e",
    paleOrange: "#ffd4a3",
    cream: "#ffecd6",
};

// Create MUI theme
export const theme = createTheme({
    palette: {
        background: {
            main: palette.darkBlue,
            default: palette.darkBlue,
        },
        primary: {
            main: palette.midBlue,
            light: palette.paleOrange,
            contrastText: palette.cream,
        },
        secondary: {
            main: palette.lightOrange,
            light: palette.paleOrange,
            contrastText: palette.darkBlue,
        },
        success: {
            main: palette.paleOrange,
            light: `${palette.paleOrange}EE`,
        },
        warning: {
            main: palette.lightOrange,
            light: `${palette.lightOrange}CC`,
        },
        error: {
            main: palette.burntOrange,
            light: `${palette.burntOrange}CC`,
        },
    },
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
        fontSize: 14,
        h1: {
            fontSize: "2rem",
            fontWeight: 700,
            color: palette.cream,
        },
        h2: {
            fontSize: "1.5rem",
            fontWeight: 600,
            color: palette.greyPurple,
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            color: palette.midBlue,
        },
    },
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
                    backgroundColor: palette.darkBlue,
                    color: palette.cream,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 4,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                },
            },
        },
    },
});

// Custom styled notification component
export const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
    "&.notistack-MuiContent-success": {
        backgroundColor: theme.palette.success.main,
    },
    "&.notistack-MuiContent-error": {
        backgroundColor: theme.palette.error.main,
    },
    "&.notistack-MuiContent-warning": {
        backgroundColor: theme.palette.warning.main,
    },
}));
