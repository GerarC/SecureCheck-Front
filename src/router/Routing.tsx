import {
    ROUTE_ABSOLUTE_BASE_PATH,
    ROUTE_ABSOLUTE_LOGIN_PATH,
    ROUTE_ABSOLUTE_REGISTER_PATH,
} from "@constants/router.constants"
import Login from "@pages/authentication/Login"
import Register from "@pages/authentication/Register"
import { Navigate, Route, Routes } from "react-router-dom"

function Routing() {
    return (
        <Routes>
            <Route
                path={ROUTE_ABSOLUTE_BASE_PATH}
                element={<Navigate to={ROUTE_ABSOLUTE_LOGIN_PATH} replace />}
            />
            <Route path={ROUTE_ABSOLUTE_LOGIN_PATH} element={<Login />} />
            <Route path={ROUTE_ABSOLUTE_REGISTER_PATH} element={<Register />} />
        </Routes>
    )
}

export default Routing
