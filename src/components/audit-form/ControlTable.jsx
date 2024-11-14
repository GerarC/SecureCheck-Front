import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
	useTheme,
	Box,
} from "@mui/material";
import QuestionsList from "./QuestionsList";

import { useContext } from "react";
import { AnswerContext } from "../../context/answer-context";
import ConformingRadioGroup from "./ConformingRadioGroup";

const ControlTable = ({
	controls,
	domainIndex,
	deleteQuestion,
	editQuestion,
	addQuestion,
}) => {
	const theme = useTheme();


	const handleChangeAnswer = useContext(AnswerContext)

	return (
		<TableContainer component={Box} sx={{ overflowX: "auto" }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							sx={{
								width: { xs: "10%", sm: "5%", md: "3%" },
								fontWeight: "bold",
								borderBottom: `1px solid ${theme.palette.secondary.light}`,
							}}
						>
							<Typography color="primary" variant="h6">
								#
							</Typography>
						</TableCell>
						<TableCell
							sx={{
								width: { xs: "30%", sm: "20%", md: "15%" },
								fontWeight: "bold",
								borderBottom: `1px solid ${theme.palette.secondary.light}`,
							}}
						>
							<Typography color="primary" variant="h6">
								Nombre Control
							</Typography>
						</TableCell>
						<TableCell
							sx={{
								width: { xs: "40%", sm: "25%", md: "20%" },
								fontWeight: "bold",
								borderBottom: `1px solid ${theme.palette.secondary.light}`,
							}}
						>
							<Typography color="primary" variant="h6">
								Descripción
							</Typography>
						</TableCell>
						<TableCell
							sx={{
								width: { xs: "50%", sm: "30%", md: "32%" },
								fontWeight: "bold",
								borderBottom: `1px solid ${theme.palette.secondary.light}`,
							}}
						>
							<Typography color="primary" variant="h6">
								Preguntas
							</Typography>
						</TableCell>
						<TableCell
							sx={{
								width: { xs: "20%", sm: "10%", md: "5%" },
								fontWeight: "bold",
								borderBottom: `1px solid ${theme.palette.secondary.light}`,
							}}
						>
							<Typography color="primary" variant="h6">
								Conformidad
							</Typography>
						</TableCell>
						<TableCell
							sx={{
								width: { xs: "40%", sm: "25%", md: "25%" },
								fontWeight: "bold",
								borderBottom: `1px solid ${theme.palette.secondary.light}`,
								padding: 0,
							}}
						>
							<Typography color="primary" variant="h6">
								Comentarios
							</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{controls ? controls.map((control) => (
						<TableRow key={control.id}>
							<TableCell
								sx={{
									fontWeight: "bold",
									padding: theme.spacing(1),
								}}
							>
								<Typography fontWeight={"bold"}>
									{domainIndex}.{control.index}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>{control.name}</Typography>
							</TableCell>
							<TableCell>
								<Typography>{control.description}</Typography>
							</TableCell>
							<TableCell>
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
							<TableCell>
								<ConformingRadioGroup control={control} />
							</TableCell>
							<TableCell>
								<TextField
									required
									variant="outlined"
									placeholder="Comentarios"
									defaultValue={control.answer.comment}
									onChange={async (e) => {
										const answer = control.answer;
										answer.comment = e.target.value;
										handleChangeAnswer(answer);
									}}
									fullWidth
									multiline
									minRows={2}
									maxRows={3}
									sx={{ padding: theme.spacing(1) }}
								/>
							</TableCell>
						</TableRow>
					)) : (<></>)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ControlTable;
