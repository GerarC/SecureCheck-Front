import { User, Mail, Lock, Calendar, CreditCard } from "lucide-react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./createaccount.scss";

const CreateAccount = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle register
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
                    minWidth: "400px",
                    background: "#fff",
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Box textAlign="center" mb={4}>
                    <Typography variant="h4" fontWeight={600} color="#333">
                        Crear Cuenta de Auditor
                    </Typography>
                    <Typography variant="body1" color="#333">
                        Regístrese para acceder a la herramienta de auditoría ISO 27001
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                            label="Nombre"
                            type="text"
                            placeholder="Ingrese su nombre"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <User
                                            style={{
                                                color: theme.palette.primary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                            label="Apellido"
                            type="text"
                            placeholder="Ingrese su apellido"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <User
                                            style={{
                                                color: theme.palette.primary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                            label="Cédula"
                            type="text"
                            placeholder="Ingrese su cédula"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <CreditCard
                                            style={{
                                                color: theme.palette.primary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                            label="Correo electrónico"
                            type="email"
                            placeholder="Ingrese su correo electrónico"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <Mail
                                            style={{
                                                color: theme.palette.primary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                            label="Fecha de nacimiento"
                            type="date"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <Calendar
                                            style={{
                                                color: theme.palette.primary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                            label="Contraseña"
                            type="password"
                            placeholder="Ingrese su contraseña"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <Lock
                                            style={{
                                                color: theme.palette.primary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box mb={4}>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    paddingLeft: "1rem",
                                },
                            }}
                            label="Confirmar Contraseña"
                            type="password"
                            placeholder="Confirme su contraseña"
                            required
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <Lock
                                            style={{
                                                color: theme.palette.primary.main,
                                                marginRight: "14px",
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Box>
                    <Box mb={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                background: theme.palette.primary.main,
                                color: "#fff",
                                borderRadius: 1,
                                "&:hover": {
                                    background: theme.palette.warning.main,
                                },
                            }}
                        >
                            Crear Cuenta
                        </Button>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="body2" color="#333">
                            ¿Ya tienes una cuenta?{" "}
                            <a
                                onClick={() => navigate("/login")}
                                style={{
                                    textDecoration: "none",
                                    color: theme.palette.primary.main,
                                    cursor: "pointer",
                                }}
                            >
                                Iniciar Sesión
                            </a>
                        </Typography>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default CreateAccount;
