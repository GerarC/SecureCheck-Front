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
import { Add, Cancel, Delete, Save } from "@mui/icons-material";
import { Edit } from "lucide-react";
import { enqueueSnackbar } from "notistack";
import {
    CONTROL_QUESTION_LOWER_LIMIT_MESSAGE,
    CONTROL_QUESTION_UPPER_LIMIT_MESSAGE,
} from "../../utils/constants/auditor-constants";

const Datatable = ({
    form,
    handleChangeAnswer,
    deleteQuestion,
    editQuestion,
    addQuestion,
}) => {
    const [formData, setFormData] = useState(form);
    const [editModes, setEditModes] = useState([]);
    const [deletedQuestions, setDeletedQuestions] = useState([]);
    const [addModes, setAddModes] = useState([]);

    async function onSaveEditButtonClick(
        domainIndex,
        controlIndex,
        questionId,
        body,
    ) {
        const edited = await editQuestion(questionId, body);
        if (edited) {
            console.log(body);
            console.log(formData);
            const newForm = formData;
            let newControl = newForm[domainIndex].controls[controlIndex];
            newControl.questions = newControl.questions.map((question) =>
                question.id !== questionId ? question : { id: question.id, body },
            );
            newForm[domainIndex].controls[controlIndex] = newControl;
            setFormData(newForm);
            setEditModes(editModes.filter((question) => question !== questionId));
        }
    }

    async function onAddQuestionButton(
        domainIndex,
        controlIndex,
        controlId,
        body,
    ) {
        const addedQuestion = await addQuestion(controlId, body);
        if (addedQuestion) {
            const newForm = formData;
            let newControl = newForm[domainIndex].controls[controlIndex];
            newControl.questions = newControl.questions.concat([addedQuestion]);
            newForm[domainIndex].controls[controlIndex] = newControl;
            setFormData(newForm);
            setAddModes(
                addModes.filter((addingControl) => addingControl !== controlId),
            );
        }
    }

    async function onDeleteButtonClick(domainIndex, controlIndex, questionId) {
        if (formData[domainIndex].controls[controlIndex].questions.length === 1) {
            enqueueSnackbar(CONTROL_QUESTION_LOWER_LIMIT_MESSAGE, {
                variant: "warning",
            });
            return;
        }
        const deleted = await deleteQuestion(questionId);
        if (deleted) {
            setDeletedQuestions(deletedQuestions.concat([questionId]));
            const newForm = formData;
            let newControl = newForm[domainIndex].controls[controlIndex];
            newControl.questions = newControl.questions.filter(
                (question) => question.id !== questionId,
            );
            newForm[domainIndex].controls[controlIndex] = newControl;
            setFormData(newForm);
        }
    }

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
                            <Typography>
                                <strong>{domain.index}.</strong> {domain.name}
                            </Typography>
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
                                                <TableCell>
                                                    {domain.index}.{control.index}
                                                </TableCell>
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
                                                                        {!editModes.includes(question.id) ? (
                                                                            <>
                                                                                <IconButton
                                                                                    onClick={() =>
                                                                                        setEditModes(
                                                                                            editModes.concat([question.id]),
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <Edit />
                                                                                </IconButton>
                                                                                <IconButton
                                                                                    onClick={() =>
                                                                                        onDeleteButtonClick(
                                                                                            domainIndex,
                                                                                            controlIndex,
                                                                                            question.id,
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <Delete />
                                                                                </IconButton>
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                    </>
                                                                }
                                                            >
                                                                {!editModes.includes(question.id) ||
                                                                    deletedQuestions.includes(question.id) ? (
                                                                    <Typography
                                                                        sx={{ fontSize: 14, paddingRight: 4 }}
                                                                    >
                                                                        {question.body}
                                                                    </Typography>
                                                                ) : (
                                                                    <div className="questionInput">
                                                                        <form
                                                                            onSubmit={(e) => {
                                                                                e.preventDefault;
                                                                                onSaveEditButtonClick(
                                                                                    domainIndex,
                                                                                    controlIndex,
                                                                                    question.id,
                                                                                    e.target.elements[
                                                                                        `question${question.id}`
                                                                                    ].value,
                                                                                );
                                                                            }}
                                                                        >
                                                                            <input
                                                                                defaultValue={question.body}
                                                                                id={`question${question.id}`}
                                                                            />
                                                                        </form>
                                                                        <IconButton
                                                                            onClick={() =>
                                                                                setEditModes(
                                                                                    editModes.filter(
                                                                                        (editingQuestion) =>
                                                                                            editingQuestion !== question.id,
                                                                                    ),
                                                                                )
                                                                            }
                                                                        >
                                                                            <Cancel />
                                                                        </IconButton>
                                                                    </div>
                                                                )}
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                    {!addModes.includes(control.id) ||
                                                        deletedQuestions.includes(control.id) ? (
                                                        <Button
                                                            onClick={() => {
                                                                if (
                                                                    formData[domainIndex].controls[controlIndex]
                                                                        .questions.length === 3
                                                                ) {
                                                                    enqueueSnackbar(
                                                                        CONTROL_QUESTION_UPPER_LIMIT_MESSAGE,
                                                                        { variant: "warning" },
                                                                    );
                                                                    return;
                                                                }
                                                                setAddModes(addModes.concat([control.id]));
                                                            }}
                                                        >
                                                            <Add />
                                                        </Button>
                                                    ) : (
                                                        <div className="questionInput">
                                                            <form
                                                                onSubmit={(e) => {
                                                                    e.preventDefault();
                                                                    onAddQuestionButton(
                                                                        domainIndex,
                                                                        controlIndex,
                                                                        control.id,
                                                                        e.target.elements[
                                                                            `newControlQuestion${control.id}`
                                                                        ].value,
                                                                    );
                                                                }}
                                                            >
                                                                <input id={`newControlQuestion${control.id}`} />
                                                                <IconButton type="submit">
                                                                    <Save />
                                                                </IconButton>
                                                            </form>
                                                            <IconButton
                                                                onClick={() =>
                                                                    setAddModes(
                                                                        addModes.filter(
                                                                            (addingControl) =>
                                                                                addingControl !== control.id,
                                                                        ),
                                                                    )
                                                                }
                                                            >
                                                                <Cancel />
                                                            </IconButton>
                                                        </div>
                                                    )}
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
