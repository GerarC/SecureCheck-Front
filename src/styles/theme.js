import { createTheme, styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

const palette = {
    color: "#0d2b45",
    color1: "#203c56",
    color2: "#544e68",
    color3: "#8d697a",
    color4: "#d08159",
    color5: "#ffaa5e",
    color6: "#ffd4a3",
    color7: "#ffecd6",
};

export const theme = createTheme({
    palette: {
        background: {
            main: palette.color,
            light: palette.color3
        },
        primary: {
            main: palette.color4,
            light: `${palette.color6}`,
        },
        secondary: {
            main: palette.color5,
            light: palette.color6,
        },
        success: {
            main: palette.color5,
            light: `${palette.color6}20`,
        },
        warning: {
            main: `${palette.color5}CC`,
            light: `${palette.color5}20`,
        },
        error: {
            main: palette.color4,
            light: `${palette.color4}20`,
        },
    },
    typography: {
        fontFamily: "Raleway, Arial",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
            }`,
        },
    },
});

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
    () => ({
        "&.notistack-MuiContent-success": {
            backgroundColor: theme.palette.success.main,
        },
        "&.notistack-MuiContent-error": {
            backgroundColor: theme.palette.error.main,
        },
        "&.notistack-MuiContent-warning": {
            backgroundColor: theme.palette.warning.main,
        },
    }),
);
