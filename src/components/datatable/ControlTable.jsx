import { FormControlLabel, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, useTheme } from "@mui/material";
import QuestionsList from "./QuestionsList";

const ControlTable = ({ controls, domainIndex, handleChangeAnswer, deleteQuestion, editQuestion, addQuestion }) => {
	const theme = useTheme();

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={{ width: "3%", borderBottom: `1px solid ${theme.palette.secondary.light}` }}>#</TableCell>
						<TableCell sx={{ width: "15%", borderBottom: `1px solid ${theme.palette.secondary.light}` }}>Nombre Control</TableCell>
						<TableCell sx={{ width: "20%", borderBottom: `1px solid ${theme.palette.secondary.light}` }}>Descripción</TableCell>
						<TableCell sx={{ width: "32%", borderBottom: `1px solid ${theme.palette.secondary.light}` }}>Preguntas de Auditoría</TableCell>
						<TableCell sx={{ width: "5%", borderBottom: `1px solid ${theme.palette.secondary.light}` }}>Válido</TableCell>
						<TableCell sx={{ width: "25%", borderBottom: `1px solid ${theme.palette.secondary.light}`, padding: 0 }}> Comentarios </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{controls.map((control) => (
						<TableRow key={control.id}>
							<TableCell sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}>{domainIndex}.{control.index}</TableCell>
							<TableCell sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}>{control.name}</TableCell>
							<TableCell sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}>{control.description}</TableCell>
							<TableCell sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}>
								<QuestionsList
									domainIndex={domainIndex}
									controlIndex={control.index}
									control={control}
									deleteQuestion={deleteQuestion}
									editQuestion={editQuestion}
									addQuestion={addQuestion}
									handleChangeAnswer={handleChangeAnswer}
								/>
							</TableCell>
							<TableCell sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}>
								<RadioGroup
									row
									name={`control-validity-${control.id}`}
									onChange={(e) => {
										const answer = control.answer;
										answer.done = e.target.value === "yes" ? true : false
										handleChangeAnswer(answer)
									}}
								>
									<FormControlLabel value="yes" control={<Radio sx={{ color: theme.palette.success.main }} />} label="Sí" />
									<FormControlLabel value="no" control={<Radio sx={{ color: theme.palette.error.main }} />} label="No" />
								</RadioGroup>
							</TableCell>
							<TableCell sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}`, padding: 0 }}>
								<TextField
									variant="outlined"
									placeholder="Comentarios"
									onChange={(e) => {
										const answer = control.answer;
										answer.comment = e.target.value
										handleChangeAnswer(answer)
									}}
									fullWidth
									multiline
									minRows={2}
									maxRows={3}
									sx={{ height: 'auto', padding: '4px 0' }}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ControlTable;
