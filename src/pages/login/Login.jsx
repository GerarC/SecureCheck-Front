import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import authService from "../../services/api/auth-service";
import { useState } from "react";
import localStorageService from "../../services/local-storage";
import { LOCAL_STORAGE_USER_KEY } from "../../utils/constants/local-storage-constants";
import ROLES from "../../utils/roles";
import { useAuthentication } from "../../hooks/use-authentication";
import { enqueueSnackbar } from "notistack";

const Login = () => {
    const redirect = useNavigate();
    const [userData, setUserData] = useState();
    const { login } = useAuthentication();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = e.target.elements;
        const userInfo = {
            email: formValues.email.value,
            password: formValues.password.value,
        };
        authService
            .login(userInfo)
            .then((response) => {
                if (response.ok) return response.json();
                else response.json().then(handleErrors);
            })
            .then((user) => {
                if (user) {
                    setUserData(user);
                    localStorageService.setItem(LOCAL_STORAGE_USER_KEY, user);
                    const path = getPathPerRole(user.role);
                    login(userData);
                    redirect(path);
                    e.target.reset();
                }
            });
    };

    function handleErrors(exception) {
        enqueueSnackbar(exception.message, { variant: "error" });
        if (exception.statusCode == 400 && exception.errors)
            exception.errors.forEach((error) =>
                enqueueSnackbar(error, { variant: "warning" }),
            );
    }

    const getPathPerRole = (role) => {
        if (role === ROLES.admin || role == ROLES.auditor) return "/auditor";
        return "/";
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="welcome-message">
                    <h1>Bienvenido Señor(a) Auditor</h1>
                    <p>
                        Inicie sesión para acceder a la herramienta de auditoría ISO 27001
                    </p>
                </div>
                <div className="login-form">
                    <div className="title">Iniciar Sesión</div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-boxes">
                            <div className="input-box">
                                <Mail size={20} />
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Ingrese su email"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <Lock size={20} />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    required
                                />
                            </div>
                            <div className="text">
                                <a href="#">¿Olvidó su contraseña?</a>
                            </div>
                            <div className="button input-box">
                                <input type="submit" value="Iniciar Sesión" />
                            </div>
                            <div className="text sign-up-text">
                                ¿Aun no tienes cuenta?{" "}
                                <a onClick={() => redirect("/register")}>Crear Cuenta</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
