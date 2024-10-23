import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./router/routing";
import "./styles/index.scss";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@emotion/react";
import { StyledMaterialDesignContent, theme } from "./styles/theme";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <SnackbarProvider
                    maxSnack={6}
                    Components={{
                        success: StyledMaterialDesignContent,
                        error: StyledMaterialDesignContent,
                        warning: StyledMaterialDesignContent,
                    }}
                >
                    <Routing />
                </SnackbarProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
