import { useState } from "react";
import { IconButton, TextField, Box, useTheme } from "@mui/material";
import { Add, Cancel, Save } from "@mui/icons-material";

const ControlActions = ({ controlIndex, onAddQuestionButton }) => {
	const [newQuestion, setNewQuestion] = useState("");
	const [isAdding, setIsAdding] = useState(false);
	const theme = useTheme();

	const handleAddQuestion = () => {
		if (newQuestion.trim()) {
			onAddQuestionButton(controlIndex, newQuestion);
			setNewQuestion("");
			setIsAdding(false);
		}
	};

	return (
		<Box display="flex" alignItems="center" marginBottom={theme.spacing(2)} marginLeft={theme.spacing(2)}>
			{isAdding ? (
				<>
					<TextField
						label="Nueva Pregunta"
						variant="outlined"
						value={newQuestion}
						onChange={(e) => setNewQuestion(e.target.value)}
						size="small"
						sx={{ marginRight: theme.spacing(1), flexGrow: 1, minWidth: { xs: "150px", sm: "200px", md: "300px" } }}
					/>
					<IconButton color="success" onClick={handleAddQuestion} sx={{ padding: theme.spacing(1) }}>
						<Save />
					</IconButton>
					<IconButton onClick={() => setIsAdding(false)} color="error" sx={{ padding: theme.spacing(1) }}>
						<Cancel color="error" />
					</IconButton>
				</>
			) : (
				<IconButton onClick={() => setIsAdding(true)} color="secondary">
					<Add />
				</IconButton>
			)}
		</Box>
	);
};

export default ControlActions;
