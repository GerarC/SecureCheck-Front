import { useState } from "react";
import { TextField, useTheme, IconButton, Box } from "@mui/material";
import { Cancel, Save } from "@mui/icons-material";

const EditingQuestionForm = ({ initialValue, onSave, onCancel }) => {
	const [questionBody, setQuestionBody] = useState(initialValue);
	const theme = useTheme();

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(questionBody);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }}
		>
			<TextField
				label="Pregunta"
				variant="outlined"
				value={questionBody}
				onChange={(e) => setQuestionBody(e.target.value)}
				size="small"
				sx={{ flexGrow: 1, minWidth: { xs: "200px", sm: "300px", md: "400px" } }}
			/>
			<IconButton
				variant="contained"
				color="success"
				type="submit"
				sx={{ padding: theme.spacing(2) }}
			>
				<Save />
			</IconButton>
			<IconButton
				color="error"
				sx={{
					borderColor: theme.palette.error.main,
					padding: theme.spacing(2),
					"&:hover": {
						borderColor: theme.palette.warning.main,
						color: theme.palette.warning.main,
					},
				}}
				onClick={onCancel}
			>
				<Cancel color="error" />
			</IconButton>
		</Box>
	);
};

export default EditingQuestionForm;
