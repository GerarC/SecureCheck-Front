import { useState } from "react";
import { ListItem, Typography, IconButton, useTheme } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import EditingQuestionForm from "./EditingQuestionForm";

const QuestionItem = ({ question, deleteQuestion, editQuestion }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [localQuestion, setLocalQuestion] = useState(question);

	const theme = useTheme();

	const handleSave = async (newBody) => {
		const newQuestion = await editQuestion(question.id, newBody);
		if (newQuestion) {
			setLocalQuestion(newQuestion);
			setIsEditing(false);
		}
	};

	return (
		<ListItem key={question.id} >
			{isEditing ? (
				<EditingQuestionForm
					initialValue={localQuestion.body}
					onSave={handleSave}
					onCancel={() => setIsEditing(false)}
				/>
			) : (
				<>
					<Typography variant="body1" sx={{ flexGrow: 1 }}>
						{localQuestion.body}
					</Typography>
					<IconButton
						onClick={() => setIsEditing(true)}
						sx={{ color: theme.palette.warning.main }}
					>
						<Edit />
					</IconButton>
					<IconButton
						onClick={() => deleteQuestion(localQuestion.id)}
						sx={{ color: theme.palette.error.main }}
					>
						<Delete />
					</IconButton>
				</>
			)}
		</ListItem>
	);
};

export default QuestionItem;
