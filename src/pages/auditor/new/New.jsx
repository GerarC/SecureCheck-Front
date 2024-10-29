import { Button, TextField, Typography, Box, useTheme } from "@mui/material";
import localStorageService from "../../../services/local-storage";
import { LOCAL_STORAGE_USER_KEY } from "../../../utils/constants/local-storage-constants";
import companyService from "../../../services/api/company-service";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const New = () => {
	const redirect = useNavigate();
	const theme = useTheme();

	function handleSubmit(event) {
		event.preventDefault();
		const user = localStorageService.getItem(LOCAL_STORAGE_USER_KEY);
		const formElements = event.target.elements;
		const newCompany = {
			nit: formElements.nit.value,
			name: formElements.name.value,
			email: formElements.email.value,
			phone: formElements.phone.value,
			address: formElements.address.value,
			userId: user.id,
		};
		companyService.create(newCompany).then((response) => {
			if (response.ok) redirect("/auditor/empresas");
			else
				response.json().then((exception) => {
					enqueueSnackbar(exception.message, { variant: "error" });
					if (exception.errors)
						exception.errors.forEach((error) =>
							enqueueSnackbar(error, { variant: "warning" }),
						);
				});
		});
	}

	return (
		<Box
			className="new"
			sx={{
				backgroundColor: theme.palette.success.light,
				padding: theme.spacing(4),
				borderRadius: theme.shape.borderRadius,
				width: "100%",
			}}
		>
			<Box className="newContainer"
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: theme.spacing(4)
				}}>
				<Box className="top">
					<Typography variant="h4" color={theme.palette.primary.main}>
						Agregar nueva empresa
					</Typography>
				</Box>
				<Box className="bottom"
					sx={{
						width: "100%",
						display: "flex",
					}}>
					<Box
						className="right"
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexWrap: "wrap",
							gap: theme.spacing(4),
						}}
					>
						<TextField
							id="name"
							label="Nombre"
							variant="outlined"
							sx={{
								flexGrow: 1,
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.primary.main,
									},
								},
							}}
						/>
						<TextField
							id="nit"
							label="Nit"
							variant="outlined"
							sx={{
								flexGrow: 1,
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.primary.main,
									},
								},
							}}
						/>
						<TextField
							id="address"
							label="Dirección"
							variant="outlined"
							sx={{
								flexGrow: 1,
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.primary.main,
									},
								},
							}}
						/>
						<TextField
							id="email"
							label="Correo de contacto"
							variant="outlined"
							sx={{
								flexGrow: 1,
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.primary.main,
									},
								},
							}}
						/>
						<TextField
							id="phone"
							label="Teléfono de contacto"
							variant="outlined"
							sx={{
								flexGrow: 1,
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.primary.main,
									},
								},
							}}
						/>
						<Button
							sx={{
								flexGrow: 1,
								color: theme.palette.primary.main,
								backgroundColor: theme.palette.secondary.main,
								"&:hover": {
									backgroundColor: theme.palette.secondary.dark,
								},
								padding: theme.spacing(1, 3),
								borderRadius: theme.shape.borderRadius,
							}}
							variant="contained"
							type="submit"
						>
							<Typography variant="body1" fontWeight={500}>
								Guardar empresa
							</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default New;
