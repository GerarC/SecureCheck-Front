import { useState } from "react";
import { Button, IconButton, TextField, Box, useTheme } from "@mui/material";
import { Add, Cancel } from "@mui/icons-material";

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
		<div>
			{isAdding ? (
				<Box display="flex" alignItems="center" marginBottom={2}>
					<TextField
						label="Nueva Pregunta"
						variant="outlined"
						value={newQuestion}
						onChange={(e) => setNewQuestion(e.target.value)}
						size="small"
						style={{ marginRight: 8 }}
					/>
					<Button
						variant="contained"
						color={theme.palette.primary.main}
						onClick={handleAddQuestion}
						sx={{ backgroundColor: theme.palette.warning.main, '&:hover': { backgroundColor: theme.palette.primary.light } }}
					>
						<Add />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setIsAdding(false)}
						style={{ marginLeft: 8, borderColor: theme.palette.error.main, color: theme.palette.error.main }}
					>
						<Cancel />
					</Button>
				</Box>
			) : (
				<IconButton
					onClick={() => setIsAdding(true)}
					sx={{ color: theme.palette.primary.main }}
				>
					<Add />
				</IconButton>
			)}
		</div>
	);
};

export default ControlActions;
