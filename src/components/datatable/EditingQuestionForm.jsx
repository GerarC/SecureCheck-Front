import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Save } from "lucide-react";
import { Cancel } from "@mui/icons-material";

const EditingQuestionForm = ({ initialValue, onSave, onCancel }) => {
	const [questionBody, setQuestionBody] = useState(initialValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(questionBody);
	};

	return (
		<form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
			<TextField
				value={questionBody}
				onChange={(e) => setQuestionBody(e.target.value)}
				variant="outlined"
				size="small"
				style={{ marginRight: 8 }}
			/>
			<Button variant="contained" color="primary" type="submit"><Save /></Button>
			<Button variant="outlined" onClick={onCancel} style={{ marginLeft: 8 }}><Cancel /></Button>
		</form>
	);
};

export default EditingQuestionForm;
