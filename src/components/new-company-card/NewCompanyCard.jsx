import { Close } from "@mui/icons-material";
import {
	Button,
	TextField,
	Typography,
	Box,
	useTheme,
	Card,
	Modal,
	IconButton,
} from "@mui/material";

const NewCompanyCard = ({ open, setOpen, createCompany }) => {
	const theme = useTheme();

	function closeModal() {
		setOpen(false)
	}

	function handleSubmit(event) {
		event.preventDefault();
		const formElements = event.target.elements;
		const newCompany = {
			nit: formElements.nit.value,
			name: formElements.name.value,
			email: formElements.email.value,
			phone: formElements.phone.value,
			address: formElements.address.value,
		};
		createCompany(newCompany);
	}

	return (
		<Modal sx={{
		}} open={open} onClose={closeModal}>
			<Card
				className="new"
				sx={{
					padding: theme.spacing(4),
					boxShadow:
						"0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
					borderRadius: theme.shape.borderRadius,
					borderColor: theme.palette.primary.main,
					border: "1px solid",
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Box
					className="newContainer"
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						position: "relative",
						gap: theme.spacing(4),
					}}
				>
					<IconButton onClick={closeModal} sx={{
						width: "fit-content",
						position: "absolute",
						right: theme.spacing(1),
					}}>
						<Close />
					</IconButton>
					<Box display="flex" className="top">
						<Typography variant="h4" color={theme.palette.primary.main}>
							Agregar nueva empresa
						</Typography>
					</Box>
					<Box
						className="bottom"
						sx={{
							width: "100%",
							display: "flex",
						}}
					>
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
			</Card>
		</Modal>
	);
};

export default NewCompanyCard;
