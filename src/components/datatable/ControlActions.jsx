import { useState } from "react";
import { IconButton, TextField, Box } from "@mui/material";
import { Add, Cancel, Save } from "@mui/icons-material";

const ControlActions = ({ controlIndex, onAddQuestionButton }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isAdding, setIsAdding] = useState(false);

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
        <Box display="flex" alignItems="center" marginBottom={2} marginLeft={2}>
          <TextField
            label="Nueva Pregunta"
            variant="outlined"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            size="small"
            sx={{ marginRight: 1 }}
          />
          <IconButton color="success" onClick={handleAddQuestion}>
            <Save />
          </IconButton>
          <IconButton onClick={() => setIsAdding(false)} color="error">
            <Cancel color="error" />
          </IconButton>
        </Box>
      ) : (
        <IconButton onClick={() => setIsAdding(true)} color="secondary">
          <Add />
        </IconButton>
      )}
    </div>
  );
};

export default ControlActions;
