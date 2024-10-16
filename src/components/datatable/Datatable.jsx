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

const Datatable = ({ form, handleChangeAnswer }) => {
    const [formData, setFormData] = useState(form);

    useEffect(() => {
        setFormData(form);
    }, [form]);

    function handleFormAnswerChange(domainIndex, controlIndex, validControl) {
        const newForm = formData;
        newForm[domainIndex].controls[controlIndex].answer.done =
            validControl === "yes" ? true : false;
        handleChangeAnswer(newForm[domainIndex].controls[controlIndex].answer);
        setFormData(newForm);
    }

    function handleFormCommentChange(domainIndex, controlIndex, comment) {
        const newForm = formData;
        newForm[domainIndex].controls[controlIndex].answer.comment = comment;
        handleChangeAnswer(newForm[domainIndex].controls[controlIndex].answer);
        setFormData(newForm);
    }

    return (
        <div className="datatable">
            {formData ? (
                formData.map((domain, domainIndex) => (
                    <Accordion key={domain.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography><strong>{domain.index}.</strong> {domain.name}</Typography>
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
                                        {domain.controls.map((control, controlIndex) => (
                                            <TableRow key={control.id}>
                                                <TableCell>{domain.index}.{control.index}</TableCell>
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
                                                    <RadioGroup
                                                        defaultValue={control.answer.done ? "yes" : "not"}
                                                        id="isValidControl"
                                                        onChange={(e) => {
                                                            handleFormAnswerChange(
                                                                domainIndex,
                                                                controlIndex,
                                                                e.target.value,
                                                            );
                                                        }}
                                                        row
                                                    >
                                                        <FormControlLabel
                                                            id=""
                                                            value="yes"
                                                            control={<Radio />}
                                                            label="Si"
                                                        />
                                                        <FormControlLabel
                                                            value="not"
                                                            control={<Radio />}
                                                            label="No"
                                                        />
                                                    </RadioGroup>
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        size="small"
                                                        defaultValue={control.answer.comment}
                                                        multiline
                                                        rows={7}
                                                        sx={{
                                                            fontSize: "14px",
                                                        }}
                                                        onChange={(e) =>
                                                            handleFormCommentChange(
                                                                domainIndex,
                                                                controlIndex,
                                                                e.target.value,
                                                            )
                                                        }
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
