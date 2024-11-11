import { useState } from "react";
import QuestionItem from "./QuestionItem";
import ControlActions from "./ControlActions";
import { enqueueSnackbar } from "notistack";
import { CONTROL_QUESTION_LOWER_LIMIT_MESSAGE, CONTROL_QUESTION_UPPER_LIMIT_MESSAGE } from "../../utils/constants/auditor-constants";
import { Box } from "@mui/material";

const QuestionsList = ({ control, domainIndex, controlIndex, deleteQuestion, editQuestion, addQuestion }) => {
    const [localQuestions, setLocalQuestions] = useState(control.questions);

    return (
        <Box sx={{ padding: 2 }}>
            {localQuestions.map((question) => (
                <QuestionItem
                    key={`question-${question.id}`}
                    question={question}
                    deleteQuestion={async (questionId) => {
                        if (localQuestions.length < 2) {
                            enqueueSnackbar(CONTROL_QUESTION_LOWER_LIMIT_MESSAGE, { variant: "error" });
                            return;
                        }
                        const response = await deleteQuestion(questionId);
                        if (response) {
                            setLocalQuestions(localQuestions.filter(q => q.id !== questionId));
                        }
                    }}
                    editQuestion={editQuestion}
                />
            ))}
            <ControlActions
                domainIndex={domainIndex}
                controlIndex={controlIndex}
                control={control}
                onAddQuestionButton={async (controlIndex, newQuestion) => {
                    if (localQuestions.length >= 3) {
                        enqueueSnackbar(CONTROL_QUESTION_UPPER_LIMIT_MESSAGE, { variant: "error" });
                        return;
                    }
                    const addedQuestion = await addQuestion(controlIndex, newQuestion);
                    if (addedQuestion) {
                        setLocalQuestions(prevQuestions => [...prevQuestions, addedQuestion]);
                    }
                }}
            />
        </Box>
    );
};

export default QuestionsList;
