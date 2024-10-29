import { useState } from "react";
import { TextField, useTheme, IconButton } from "@mui/material";
import { Cancel, Save } from "@mui/icons-material";

const EditingQuestionForm = ({ initialValue, onSave, onCancel }) => {
  const [questionBody, setQuestionBody] = useState(initialValue);
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(questionBody);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <TextField
        label="Pregunta"
        variant="outlined"
        value={questionBody}
        onChange={(e) => setQuestionBody(e.target.value)}
        size="small"
        sx={{ marginRight: 1 }}
      />
      <IconButton variant="contained" color="success" type="submit">
        <Save />
      </IconButton>
      <IconButton
        color="error"
        sx={{
          borderColor: theme.palette.error.main,
          "&:hover": {
            borderColor: theme.palette.warning.main,
            color: theme.palette.warning.main,
          },
        }}
        onClick={onCancel}
      >
        <Cancel color="error" />
      </IconButton>
    </form>
  );
};

export default EditingQuestionForm;
