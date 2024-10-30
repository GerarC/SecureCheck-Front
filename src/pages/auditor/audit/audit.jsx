import { useParams } from "react-router-dom";
import Datatable from "../../../components/datatable/Datatable";
import { useCallback, useEffect, useState } from "react";
import formService from "../../../services/api/form-service";
import auditService from "../../../services/api/audit-service";
import {
    AUDIT_CREATED_MESSAGE,
    CREATING_AUDIT_MESSAGE,
    HAS_NOT_ACTIVE_MESSAGE,
    QUESTION_ADDED_MESSAGE,
    QUESTION_DELETED_MESSSAGE,
    QUESTION_UPDATED_MESSAGE,
} from "../../../utils/constants/auditor-constants";
import { enqueueSnackbar } from "notistack";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import questionService from "../../../services/api/question-service";

function Audit() {
    const [form, setForm] = useState({});
    const { id: companyId } = useParams();

    const [changedAnswers, setChangedAnswers] = useState([]);

    function handleChangeAnswer(answer) {
        let newChangedAnswers = changedAnswers;
        let foundIndex;
        if (
            !newChangedAnswers.find((item, index) => {
                if (item.id === answer.id) {
                    foundIndex = index;
                    return true;
                }
                return false;
            })
        ) {
            newChangedAnswers.push(answer);
        } else {
            newChangedAnswers[foundIndex] = answer;
            setChangedAnswers(newChangedAnswers);
        }
    }

    function handleOnSaveChangesClick() {
        console.debug(changedAnswers);
    }

    async function editQuestion(questionId, body) {
        const response = await questionService.update(questionId, { body });
        if (response.ok) {
            const updatedQuestion = await response.json();
            enqueueSnackbar(QUESTION_UPDATED_MESSAGE, { variant: "success" });
            return updatedQuestion;
        }
        const errorResponse = await response.json();
        enqueueSnackbar(errorResponse.message, { variant: "error" });
    }

    async function addQuestion(controlId, body) {
        const response = await questionService.create({
            body,
            controlId,
            companyId,
        });
        if (response.ok) {
            const newQuestion = await response.json();
            enqueueSnackbar(QUESTION_ADDED_MESSAGE, { variant: "success" });
            return newQuestion;
        }
        const errorResponse = await response.json();
        enqueueSnackbar(errorResponse.message, { variant: "error" });
    }

    async function deleteQuestion(questionId) {
        const response = await questionService.delete(questionId);
        if (response.ok) {
            const deletedQuestion = await response.json();
            enqueueSnackbar(QUESTION_DELETED_MESSSAGE, { variant: "success" });
            return deletedQuestion;
        }
        const errorResponse = await response.json();
        enqueueSnackbar(errorResponse.message, { variant: "error" });
    }

    const retry = useCallback(
        (response) => {
            if (response.ok)
                enqueueSnackbar(AUDIT_CREATED_MESSAGE, { variant: "success" });
                formService
                    .getByCompany(companyId)
                    .then((response) => {
                        if (response.ok) return response.json();
                    })
                    .then((fetchedForm) => {
                        setForm(fetchedForm);
                    });
        },
        [companyId],
    );

    useEffect(() => {
        formService
            .getByCompany(companyId)
            .then((response) => {
                if (response.ok) return response.json();
                else if (response.status === 409)
                    response.json().then((error) => {
                        if (error.message.includes(HAS_NOT_ACTIVE_MESSAGE)) {
                            enqueueSnackbar(error.message, { variant: "warning" });
                            enqueueSnackbar(CREATING_AUDIT_MESSAGE, { variant: "info" });
                            auditService.createAudit({ companyId }).then(retry);
                        }
                    });
            })
            .then((fetchedForm) => {
                setForm(fetchedForm);
            });
    }, [companyId, retry]);

    return (
        <>
            {form ? (
                <>
                    <Datatable
                        form={form.domains}
                        handleChangeAnswer={handleChangeAnswer}
                        editQuestion={editQuestion}
                        addQuestion={addQuestion}
                        deleteQuestion={deleteQuestion}
                    />
                    <Button sx={{ ml: 3 }} onClick={() => handleOnSaveChangesClick()}>
                        Guardar Cambios
                    </Button>
                </>
            ) : (
                <Backdrop sx={{ color: "#fff", zIndex: 30 }} open={true}>
                    <CircularProgress size={100} />
                </Backdrop>
            )}
        </>
    );
}

export default Audit;
