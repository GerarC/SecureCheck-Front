import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/api/auth-service";
import { useState } from "react";
import localStorageService from "../../services/local-storage";
import { LOCAL_STORAGE_USER_KEY } from "../../utils/constants/local-storage-constants";
import ROLES from "../../utils/roles";
import { useAuthentication } from "../../hooks/use-authentication";
import { enqueueSnackbar } from "notistack";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Login = () => {
    const theme = useTheme();
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
        if (role === ROLES.admin || role === ROLES.auditor) return "/auditor";
        return "/";
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: theme.palette.background.main,
                padding: "30px",
                fontFamily: theme.typography.fontFamily,
            }}
        >
            <Container
                sx={{
                    width: "25vw",
                    minWidth: "350px",
                    background: "#fff",
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Box textAlign="center" mb={4}>
                    <Typography variant="h4" fontWeight={600} color="primary">
                        Bienvenido Señor(a) Auditor
                    </Typography>
                    <Typography variant="body1" color="primary">
                        Inicie sesión para acceder a la herramienta de auditoría ISO 27001
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            id="email"
                            type="text"
                            placeholder="Ingrese su email"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <Mail
                                            style={{
                                                color: theme.palette.secondary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                            sx={{
                                height: "50px",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "rgba(0, 0, 0, 0.2)",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: theme.palette.primary.main,
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: theme.palette.primary.main,
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            id="password"
                            type="password"
                            placeholder="Ingrese su contraseña"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <Lock
                                            style={{
                                                color: theme.palette.secondary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                            sx={{
                                height: "50px",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "rgba(0, 0, 0, 0.2)",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: theme.palette.primary.main,
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: theme.palette.primary.main,
                                    },
                                    "& .MuiInputBase-input": {
                                        paddingLeft: "1rem",
                                    },
                                },
                            }}
                        />
                    </Box>
                    <Box textAlign="right" mb={2}>
                        <a
                            href="#"
                            style={{
                                textDecoration: "none",
                                color: theme.palette.secondary.main,
                                cursor: "pointer",
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="secondary"
                                sx={{ "&:hover": { color: theme.palette.secondary.dark } }}
                            >
                                ¿Olvidó su contraseña?
                            </Typography>
                        </a>
                    </Box>
                    <Box mb={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                background: theme.palette.primary.main,
                                "&:hover": {
                                    background: theme.palette.primary.light,
                                },
                            }}
                        >
                            Iniciar Sesión
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem"
                        }}
                    >
                        <Typography variant="body2" color="#333">
                            ¿Aun no tienes cuenta?
                        </Typography>
                        <a
                            onClick={() => redirect("/register")}
                            style={{
                                textDecoration: "none",
                                color: theme.palette.primary.main,
                                cursor: "pointer",
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="secondary"
                                sx={{ "&:hover": { color: theme.palette.secondary.dark } }}
                            >
                                Crear cuenta
                            </Typography>
                        </a>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default Login;
