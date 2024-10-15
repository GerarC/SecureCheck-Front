import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    Paper,
    Typography,
    List,
    ListItem,
    IconButton,
    Button,
    Backdrop,
    CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./datatable.scss";
import { useEffect, useState } from "react";
import { Add, Delete } from "@mui/icons-material";
import { Edit } from "lucide-react";

const Datatable = ({ controlsData }) => {
    const [formData, setFormData] = useState(controlsData);

    useEffect(() => {
        setFormData(controlsData);
    }, [controlsData]);

    return (
        <div className="datatable">
            {formData ? (
                formData.map((domain) => (
                    <Accordion key={domain.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{domain.name}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell style={{ width: "15%" }}>
                                                Nombre Control
                                            </TableCell>
                                            <TableCell style={{ width: "20%" }}>
                                                Descripción
                                            </TableCell>
                                            <TableCell style={{ width: "35%" }}>
                                                Preguntas de Auditoría
                                            </TableCell>
                                            <TableCell>Válido</TableCell>
                                            <TableCell style={{ width: "20%" }}>
                                                Comentarios
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {domain.controls.map((control) => (
                                            <TableRow key={control.id}>
                                                <TableCell>{control.index}</TableCell>
                                                <TableCell>{control.name}</TableCell>
                                                <TableCell>{control.description}</TableCell>
                                                <TableCell>
                                                    <List sx={{ width: "100%", fontSize: 12 }}>
                                                        {control.questions.map((question) => (
                                                            <ListItem
                                                                key={question.id}
                                                                disableGutters
                                                                secondaryAction={
                                                                    <>
                                                                        <IconButton>
                                                                            <Edit />
                                                                        </IconButton>
                                                                        <IconButton>
                                                                            <Delete />
                                                                        </IconButton>
                                                                    </>
                                                                }
                                                            >
                                                                <Typography
                                                                    sx={{ fontSize: 14, paddingRight: 4 }}
                                                                >
                                                                    {question.body}
                                                                </Typography>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                    <Button>
                                                        <Add />
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    <RadioGroup row>
                                                        <FormControlLabel
                                                            value="Si"
                                                            control={<Radio />}
                                                            label="Si"
                                                        />
                                                        <FormControlLabel
                                                            value="No"
                                                            control={<Radio />}
                                                            label="No"
                                                        />
                                                    </RadioGroup>
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        size="small"
                                                        defaultValue={control.comment}
                                                        multiline
                                                        rows={7}
                                                        sx={{
                                                            fontSize: "14px",
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <Backdrop sx={{ color: "#fff", zIndex: 30 }} open={true}>
                    <CircularProgress size={100} />
                </Backdrop>
            )}
        </div>
    );
};

export default Datatable;
