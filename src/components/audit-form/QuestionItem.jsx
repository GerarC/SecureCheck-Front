import { useState } from "react";
import { ListItem, Typography, IconButton, useTheme, Box } from "@mui/material";
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
        <ListItem
            key={question.id}
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, 
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: theme.spacing(2), 
                boxSizing: "border-box",
            }}
        >
            {isEditing ? (
                <EditingQuestionForm
                    initialValue={localQuestion.body}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
                    <Typography
                        variant="body1"
                        sx={{ flexGrow: 1, fontSize: { xs: '0.9rem', sm: '1rem' }, wordBreak: 'keep-all' }}
                    >
                        {localQuestion.body}
                    </Typography>
                    <IconButton
                        onClick={() => setIsEditing(true)}
                        sx={{
                            color: theme.palette.warning.main,
                            padding: theme.spacing(1),
                        }}
                    >
                        <Edit />
                    </IconButton>
                    <IconButton
                        onClick={() => deleteQuestion(localQuestion.id)}
                        sx={{
                            color: theme.palette.error.main,
                            padding: theme.spacing(1),
                        }}
                    >
                        <Delete />
                    </IconButton>
                </Box>
            )}
        </ListItem>
    );
};

export default QuestionItem;
