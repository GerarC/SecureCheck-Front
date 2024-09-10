import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./css/index.css"
import Routing from "./pages/Routing.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </StrictMode>
)
