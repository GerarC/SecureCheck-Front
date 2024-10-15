import { useParams } from "react-router-dom";
import Datatable from "../../../components/datatable/Datatable";
import { useCallback, useEffect, useState } from "react";
import formService from "../../../services/api/form-service";
import auditService from "../../../services/api/audit-service";
import { HAS_NOT_ACTIVE_MESSAGE } from "../../../utils/constants/auditor-constants";
import { enqueueSnackbar } from "notistack";
import { Backdrop, CircularProgress } from "@mui/material";

function Audit() {
    const [form, setForm] = useState({});
    const { id } = useParams();

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
                <Datatable controlsData={form.domains} />
            ) : (
                <Backdrop sx={{ color: "#fff", zIndex: 30 }} open={true}>
                    <CircularProgress size={100} />
                </Backdrop>
            )}
        </>
    );
}

export default Audit;
