import "./list.scss";
import CompanyTable from "../../../components/company-table/CompanyTable";
import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_USER_KEY } from "../../../utils/constants/local-storage-constants";
import userService from "../../../services/api/user-service";
import localStorageService from "../../../services/local-storage";
import companyService from "../../../services/api/company-service";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { COMPANY_DELETED_NOTIFICATION } from "../../../utils/constants/auditor-constants";
import NewCompanyCard from "../../../components/new-company-card/NewCompanyCard";
import { Box, Button, Typography, useTheme, CircularProgress } from "@mui/material";

const Companies = () => {
	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false);
	const [companies, setCompanies] = useState([]);
	const [loading, setLoading] = useState(true);
	const theme = useTheme();

	const navigateAudit = (id) => {
		navigate(`/auditor/companies/${id}/audit-form`);
	};

	const navigateCompanyAudits = (id) => {
		navigate(`/auditor/companies/${id}/audits`);
	};

	const createCompany = useCallback((newCompany) => {
		const user = localStorageService.getItem(LOCAL_STORAGE_USER_KEY);
		companyService.create({ ...newCompany, userId: user.id })
			.then((response) => {
				if (response.ok) {
					enqueueSnackbar("Company created successfully!", { variant: "success" });
					setOpenModal(false);
					loadCompanies(user.id);
				} else {
					response.json().then((exception) => {
						enqueueSnackbar(exception.message, { variant: "error" });
						if (exception.errors)
							exception.errors.forEach((error) =>
								enqueueSnackbar(error, { variant: "warning" }),
							);
					});
				}
			});
	}, []);

	const deleteCompany = useCallback((id) => {
		companyService.delete(id).then((response) => {
			if (response.ok) {
				enqueueSnackbar(COMPANY_DELETED_NOTIFICATION, { variant: "success" });
				loadCompanies();
			} else {
				response.json().then((error) =>
					enqueueSnackbar(error.message, { variant: "warning" }),
				);
			}
		});
	}, []);

	const loadCompanies = (userId) => {
		setLoading(true);
		userService.companies(userId).then((response) => {
			if (response.ok) return response.json();
			// TODO: handle errors
		})
		.then((fetchedCompanies) => {
			setCompanies(fetchedCompanies);
			setLoading(false);
		})
		.catch(() => {
			enqueueSnackbar("Failed to load companies.", { variant: "error" });
			setLoading(false);
		});
	};

	useEffect(() => {
		const user = localStorageService.getItem(LOCAL_STORAGE_USER_KEY);
		loadCompanies(user.id);
	}, []);

	return (
		<Box sx={{ padding: { xs: theme.spacing(2), md: theme.spacing(3) }, overflowX: "hidden" }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					justifyContent: "space-between",
					alignItems: { xs: "flex-start", sm: "center" },
					mb: 4,
				}}
			>
				<Typography variant="h4" fontWeight="medium" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, flexGrow: 1 }}>
					Empresas
				</Typography>
				<Button
					variant="contained"
					sx={{
						color: theme.palette.secondary.contrastText,
						backgroundColor: theme.palette.secondary.main,
						"&:hover": {
							backgroundColor: theme.palette.secondary.light,
						},
						width: { xs: "100%", sm: "auto" }, 
						marginTop: { xs: 2, sm: 0 },
					}}
					onClick={() => setOpenModal(true)}
				>
					Agregar nueva empresa
				</Button>
			</Box>
			{loading ? (
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
					<CircularProgress />
				</Box>
			) : (
				<CompanyTable
					rows={companies}
					deleteCompany={deleteCompany}
					getCompanyAudits={navigateCompanyAudits}
					auditCompany={navigateAudit}
				/>
			)}
			<NewCompanyCard open={openModal} setOpen={setOpenModal} createCompany={createCompany} />
		</Box>
	);
};

export default Companies;
