import { Navigate, Outlet, useNavigate } from "react-router-dom";
import localStorageService from "../services/local-storage";
import { LOCAL_STORAGE_USER_KEY } from "../utils/constants/local-storage-constants";
import { UNDEFINED_LOCAL_USER_MESSAGE } from "../utils/constants/authentication-constants";
import authService from "../services/api/auth-service";
import { enqueueSnackbar } from "notistack";

const ProtectedRoute = ({ children, allowedRoles, pathToRedirect = "/" }) => {
    const redirect = useNavigate();
    const localUser = localStorageService.getItem(LOCAL_STORAGE_USER_KEY);

    const updateContext = () => {
        if (localUser === undefined || localUser === null) {
            enqueueSnackbar(UNDEFINED_LOCAL_USER_MESSAGE, { variant: "error" });
            return <Navigate to={pathToRedirect} />;
        }
        authService
            .validateToken(localUser.token)
            .then((response) => {
                if (response.ok) return response.json();
                else
                    response.json().then((error) => {
                        enqueueSnackbar(error.message, { variant: "error" }),
                            localStorageService.clear();
                        redirect(pathToRedirect);
                    });
            })
            .then((userInfo) =>
                localStorageService.setItem(LOCAL_STORAGE_USER_KEY, userInfo),
            );
        if (allowedRoles.includes(localUser.role)) return children || <Outlet />;
        else return <Navigate to={pathToRedirect} />;
    };

    return updateContext();
};

export default ProtectedRoute;
