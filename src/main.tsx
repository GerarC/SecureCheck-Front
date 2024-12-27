import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./css/index.css"
import { ROUTE_DEFAULT_PATH } from "@constants/router.constants"
import Routing from "./router/Routing"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename={ROUTE_DEFAULT_PATH}>
            <Routing />
        </BrowserRouter>
    </StrictMode>
)
