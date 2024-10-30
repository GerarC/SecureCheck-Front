import "./list.scss";
import Empresastable from "../../../components/empresastable/Empresastable";
import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_USER_KEY } from "../../../utils/constants/local-storage-constants";
import userService from "../../../services/api/user-service";
import localStorageService from "../../../services/local-storage";
import companyService from "../../../services/api/company-service";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { COMPANY_DELETED_NOTIFICATION } from "../../../utils/constants/auditor-constants";
import NewCompanyCard from "../../../components/new-company-card/NewCompanyCard";

const Companies = () => {
	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false)
	const [companies, setCompanies] = useState([]);

	function navigateAudit(id) {
		navigate(`/auditor/auditoria/${id}`);
	}

	const createCompany = useCallback(function (newCompany) {
		const user = localStorageService.getItem(LOCAL_STORAGE_USER_KEY);
		companyService
			.create({ ...newCompany, userId: user.id })
			.then((response) => {
				if (response.ok) {
					enqueueSnackbar("TODO: MESSAGE", { variant: "success" });
					setOpenModal(false)
				}
				else
					response.json().then((exception) => {
						enqueueSnackbar(exception.message, { variant: "error" });
						if (exception.errors)
							exception.errors.forEach((error) =>
								enqueueSnackbar(error, { variant: "warning" }),
							);
					});
			});
	}, [])

	const deleteCompany = useCallback(function (id) {
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
	}, [])

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
		<>
			<Empresastable
				rows={companies}
				deleteCompany={deleteCompany}
				auditCompany={navigateAudit}
				addButtonFunction={() => setOpenModal(true)}
			/>
			<NewCompanyCard open={openModal} setOpen={setOpenModal} createCompany={createCompany} />
		</>
	);
};

export default Companies;
