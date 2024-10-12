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
	Button
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./datatable.scss";

const Datatable = ({ controlsData }) => {

	return (
		<div className="datatable">
			{controlsData.map((category, index) => (
				<Accordion key={index}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>{category.category}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<TableContainer component={Paper}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>#</TableCell>
										<TableCell style={{ width: "20%" }}>Nombre Control</TableCell>
										<TableCell style={{ width: "25%" }}>Descripción</TableCell>
										<TableCell style={{ width: "25%" }}>Preguntas de Auditoría</TableCell>
										<TableCell>Válido</TableCell>
										<TableCell style={{ width: "25%" }}>Comentarios</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{category.controls.map((control, idx) => (
										<TableRow key={idx}>
											<TableCell>{control.number}</TableCell>
											<TableCell>{control.name}</TableCell>
											<TableCell>{control.description}</TableCell>
											<TableCell>
												{control.questions.map((question, index) => (
													<Typography key={index} style={{ fontSize: "14px" }}>{question}</Typography>
												))}
											</TableCell>
											<TableCell>
												<RadioGroup row>
													<FormControlLabel value="Si" control={<Radio />} label="Si" />
													<FormControlLabel value="No" control={<Radio />} label="No" />
												</RadioGroup>
											</TableCell>
											<TableCell>
												<TextField
													variant="outlined"
													size="small"
													defaultValue={control.comment}
													multiline
													rows={7}
													sx={{
														fontSize: '14px'
													}}
												/>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</AccordionDetails>
				</Accordion>
			))}
			<div className="button-container">
				<Button variant="contained" className="save-button">
					Guardar
				</Button>
				<Button variant="contained" className="send-button">
					Enviar y Finalizar
				</Button>
			</div>
		</div>
	);
};

export default Datatable;

