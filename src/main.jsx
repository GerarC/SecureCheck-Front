import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./router/routing";
import "./styles/index.scss";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <SnackbarProvider maxSnack={6}>
                <Routing />
            </SnackbarProvider>
        </BrowserRouter>
    </StrictMode>,
);
