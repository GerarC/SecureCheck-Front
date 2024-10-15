import "./list.scss";
import Empresastable from "../../../components/empresastable/Empresastable";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_USER_KEY } from "../../../utils/constants/local-storage-constants";
import userService from "../../../services/api/user-service";
import localStorageService from "../../../services/local-storage";
import companyService from "../../../services/api/company-service";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { COMPANY_DELETED_NOTIFICATION } from "../../../utils/constants/auditor-constants";

const List = () => {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState([]);

    function navigateAudit(id) {
        navigate(`/auditor/auditoria/${id}`);
    }

    function deleteCompany(id) {
        companyService.delete(id).then((response) => {
            if (response.ok)
                enqueueSnackbar(COMPANY_DELETED_NOTIFICATION, { variant: "success" });
            else
                response
                    .json()
                    .then((error) =>
                        enqueueSnackbar(error.message, { variant: "warning" }),
                    );
        });
    }

    useEffect(() => {
        const user = localStorageService.getItem(LOCAL_STORAGE_USER_KEY);
        userService
            .companies(user.id)
            .then((response) => {
                if (response.ok) return response.json();
                else throw new Error("x");
            })
            .then((fetchedCompanies) => {
                setCompanies(fetchedCompanies);
            });
    }, []);

    return (
        <Empresastable
            rows={companies}
            deleteCompany={deleteCompany}
            auditCompany={navigateAudit}
        />
    );
};

export default List;
