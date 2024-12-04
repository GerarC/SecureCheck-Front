import { useNavigate, useParams } from "react-router-dom";
import companyService from "../../../services/api/company-service";
import { Box, Typography, CircularProgress, useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import CompanyInfo from "../../../components/company-info/CompanyInfo";
import AuditCard from "../../../components/audit-card/AuditCard";
import AuditCardDisplay from "../../../components/audit-card-display/AuditCardDisplay";
import auditService from "../../../services/api/audit-service";
import { enqueueSnackbar } from "notistack";
import {
    AUDIT_DELETED_MESSAGE,
    AUDITS_NOT_FOUND_MESSAGE as AUDITS_NOT_FOUND_MESSAGE,
} from "../../../utils/constants/auditor-constants";

export default function Audits() {
    const { id } = useParams();
    const [audits, setAudits] = useState([]);
    const [company, setCompany] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const theme = useTheme();

    const deleteAudit = useCallback(
        async (auditId) => {
            const response = await auditService.delete(auditId);
            if (response.ok) {
                setAudits(audits.filter((audit) => audit.id !== auditId));
                enqueueSnackbar(AUDIT_DELETED_MESSAGE, { variant: "success" });
            } else {
                const error = await response.json();
                enqueueSnackbar(error.message, { variant: "error" });
            }
        },
        [audits],
    );

    useEffect(() => {
        setLoading(true);
        companyService
            .finishedAudits(id)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error("Error fetching audits"); // TODO: Handle errors
            })
            .then((fetchedAudits) => setAudits(fetchedAudits))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        setLoading(true);
        companyService
            .get(id)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error("Error fetching company data");
            })
            .then((companyData) => setCompany(companyData))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: theme.spacing(2),
                minHeight: "100vh",
                alignItems: "center",
            }}
        >
            <CompanyInfo company={company} />
            <Typography
                variant="h4"
                sx={{
                    mt: (theme) => theme.spacing(4),
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                Auditorías
            </Typography>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100px",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <AuditCardDisplay>
                    {audits.length > 0 ? (
                        audits.map((audit) => (
                            <AuditCard
                                key={audit.id}
                                audit={audit}
                                onDelete={deleteAudit}
                                onReport={(id) =>  navigate(`/auditor/audits/${id}/report`)}
                            />
                        ))
                    ) : (
                        <Typography
                            variant="body1"
                            sx={{
                                textAlign: "center",
                                color: theme.palette.text.secondary,
                                mt: 2,
                            }}
                        >
                            {AUDITS_NOT_FOUND_MESSAGE}
                        </Typography>
                    )}
                </AuditCardDisplay>
            )}
        </Box>
    );
}
