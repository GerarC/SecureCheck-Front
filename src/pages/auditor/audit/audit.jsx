import { useParams } from "react-router-dom";
import Datatable from "../../../components/datatable/Datatable";
import { useCallback, useEffect, useState } from "react";
import formService from "../../../services/api/form-service";
import auditService from "../../../services/api/audit-service";
import { HAS_NOT_ACTIVE_MESSAGE } from "../../../utils/constants/auditor-constants";
import { enqueueSnackbar } from "notistack";
import { Backdrop, Button, CircularProgress } from "@mui/material";

function Audit() {
    const [form, setForm] = useState({});
    const { id } = useParams();

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
        return true;
    }

    async function addQuestion(controlId, body) {
        return { id: controlId + Date.now().valueOf, body };
    }

    async function deleteQuestion(questionId) {
        return true;
    }

    const retry = useCallback(
        (response) => {
            if (response.ok)
                formService
                    .getByCompany(id)
                    .then((response) => {
                        if (response.ok) return response.json();
                    })
                    .then((fetchedForm) => {
                        setForm(fetchedForm);
                    });
        },
        [id],
    );

    useEffect(() => {
        formService
            .getByCompany(id)
            .then((response) => {
                if (response.ok) return response.json();
                else if (response.status === 409)
                    response.json().then((error) => {
                        if (error.message.includes(HAS_NOT_ACTIVE_MESSAGE)) {
                            enqueueSnackbar();
                            auditService.createAudit({ companyId: id }).then(retry);
                        }
                    });
            })
            .then((fetchedForm) => {
                setForm(fetchedForm);
            });
    }, [id, retry]);

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
