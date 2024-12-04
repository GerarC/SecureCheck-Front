import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./router/routing";
import "./styles/index.scss";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@emotion/react";
import { StyledMaterialDesignContent, theme } from "./styles/theme";
import { ROUTER_BASE_NAME } from "./utils/constants/router-constants";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter basename={ROUTER_BASE_NAME}>
                <SnackbarProvider
                    preventDuplicate
                    maxSnack={6}
                    Components={{
                        success: StyledMaterialDesignContent,
                        error: StyledMaterialDesignContent,
                        warning: StyledMaterialDesignContent,
                        info: StyledMaterialDesignContent,
                    }}
                >
                    <Routing />
                </SnackbarProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
