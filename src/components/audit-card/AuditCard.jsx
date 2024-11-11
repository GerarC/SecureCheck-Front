import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Divider,
    Chip,
    Button,
    Stack,
} from "@mui/material";
import { AuditStateToUser, formatDateString } from "../../utils/map-utils";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";

export default function AuditCard({ audit, onDelete, onReport }) {
    const { day: startDate, hour: startHour } = formatDateString(audit.startedAt);
    const { day: endDate, hour: endHour } = formatDateString(audit.endedAt);

    return (
        <Card
            id={audit.id}
            sx={{
                marginBottom: 2,
                borderRadius: 2,
                boxShadow: 5,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: 8,
                },
            }}
        >
            <CardHeader
                title={`Auditoría de ${startDate}`}
                titleTypographyProps={{
                    variant: "h5",
                    fontWeight: "bold",
                }}
                subheader={
                    <Chip 
                        label={AuditStateToUser[audit.state]} 
                        color={audit.state === "FINALIZED" ? "success" : "warning"} 
                        variant="outlined" 
                        sx={{ borderRadius: 2 }}
                    />
                }
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.contrastText,
                    color: (theme) => theme.palette.primary.main,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                }}
            />
            <Divider />
            <CardContent>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Fecha de Inicio:</strong> {startDate} 
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Hora de Inicio:</strong> {startHour} 
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Fecha de Finalización:</strong> {endDate} 
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Hora de Finalización:</strong> {endHour} 
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Comentario:</strong> {audit.comment || "No hay comentarios"} 
                </Typography>
            </CardContent>
            <Divider />
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Stack direction="row" spacing={2}>
                    <Button 
                        onClick={() => onReport(audit.id)} 
                        variant="contained" 
                        startIcon={<ReportIcon />}
                        sx={{
                            backgroundColor: (theme) => theme.palette.secondary.main,
                            color: (theme) => theme.palette.primary.contrastText,
                            "&:hover": {
                                backgroundColor: (theme) => theme.palette.secondary.dark,
                            },
                        }}
                    >
                        Reporte
                    </Button>
                    <Button 
                        onClick={() => onDelete(audit.id)} 
                        variant="contained" 
                        startIcon={<DeleteIcon />}
                        sx={{
                            backgroundColor: (theme) => theme.palette.error.main,
                            color: (theme) => theme.palette.primary.contrastText,
                            "&:hover": {
                                backgroundColor: (theme) => theme.palette.error.dark,
                            },
                        }}
                    >
                        Eliminar
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
