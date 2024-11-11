import { useNavigate, useParams } from "react-router-dom";
import AuditForm from "../../../components/audit-form/AuditForm";
import { useCallback, useEffect, useRef, useState } from "react";
import formService from "../../../services/api/form-service";
import auditService from "../../../services/api/audit-service";
import questionService from "../../../services/api/question-service";
import answerService from "../../../services/api/answer-service";
import {
	AUDIT_CREATED_MESSAGE,
	CREATING_AUDIT_MESSAGE,
	FINALIZED_AUDIT_MESSAGE,
	HAS_NOT_ACTIVE_MESSAGE,
	QUESTION_ADDED_MESSAGE,
	QUESTION_DELETED_MESSSAGE,
	QUESTION_UPDATED_MESSAGE,
	SAVED_FORM_MESSAGE,
	SAVING_FORM_MESSAGE,
} from "../../../utils/constants/auditor-constants";
import { enqueueSnackbar } from "notistack";
import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	useTheme,
	Stack,
} from "@mui/material";
import { debounce } from "lodash";
import AnswerProvider from "../../../provider/answer-provider";

function Audit() {
	const { id: companyId } = useParams();
	const [form, setForm] = useState({});
	const changedAnswersRef = useRef(new Map());

	const theme = useTheme();
	const navigate = useNavigate();


	const saveData = async () => {
		const answersArray = Array.from(changedAnswersRef.current.values());
		const response = await answerService.updateBatch(answersArray);

		if (response.ok) {
			enqueueSnackbar(SAVED_FORM_MESSAGE, { variant: "success" });
			changedAnswersRef.current.clear();
			return;
		}

		const errorResponse = await response.json();
		enqueueSnackbar(errorResponse.message, { variant: response.status === 400 ? "warning" : "error" });
	};



	const debouncedSaveData = debounce(() => {
		enqueueSnackbar(SAVING_FORM_MESSAGE, { variant: "info" });
		saveData();
	}, 5000);

	const handleChangeAnswer = useCallback((answer) => {
		const previousAnswer = changedAnswersRef.current.get(answer.id);

		if (previousAnswer && previousAnswer.outcome === answer.outcome && previousAnswer.comment === answer.comment)
			return;

		changedAnswersRef.current.set(answer.id, { ...answer });

		debouncedSaveData()

	}, [debouncedSaveData]);

	async function editQuestion(questionId, body) {
		const response = await questionService.update(questionId, { body });
		if (response.ok) {
			const updatedQuestion = await response.json();
			enqueueSnackbar(QUESTION_UPDATED_MESSAGE, { variant: "success" });
			return updatedQuestion;
		}
		const errorResponse = await response.json();
		enqueueSnackbar(errorResponse.message, { variant: "error" });
	}

	async function addQuestion(controlId, body) {
		const response = await questionService.create({
			body,
			controlId,
			companyId,
		});
		if (response.ok) {
			const newQuestion = await response.json();
			enqueueSnackbar(QUESTION_ADDED_MESSAGE, { variant: "success" });
			return newQuestion;
		}
		const errorResponse = await response.json();
		enqueueSnackbar(errorResponse.message, { variant: "error" });
	}

	async function deleteQuestion(questionId) {
		const response = await questionService.delete(questionId);
		if (response.ok) {
			const deletedQuestion = await response.json();
			enqueueSnackbar(QUESTION_DELETED_MESSSAGE, { variant: "success" });
			return deletedQuestion;
		}
		const errorResponse = await response.json();
		enqueueSnackbar(errorResponse.message, { variant: "error" });
	}

	async function finalizeAudit() {
		const response = await auditService.setAsFinished(form.id);
		if (response.ok) {
			enqueueSnackbar(FINALIZED_AUDIT_MESSAGE, { variant: "info" });
			navigate("/auditor/companies");
		}
	}

	const retry = useCallback(
		(response) => {
			if (response.ok) {
				enqueueSnackbar(AUDIT_CREATED_MESSAGE, { variant: "success" });
			}
			formService.getByCompany(companyId).then((response) => {
				if (response.ok) return response.json();
			}).then((fetchedForm) => {
				setForm(fetchedForm);
			});
		},
		[companyId],
	);

	useEffect(() => {
		formService.getByCompany(companyId).then((response) => {
			if (response.ok) return response.json();
			if (response.status === 409) {
				response.json().then((error) => {
					if (error.message.includes(HAS_NOT_ACTIVE_MESSAGE)) {
						enqueueSnackbar(error.message, { variant: "warning" });
						enqueueSnackbar(CREATING_AUDIT_MESSAGE, { variant: "info" });
						auditService.createAudit({ companyId }).then(retry);
					}
				});
			}
		}).then((fetchedForm) => {
			setForm(fetchedForm);
		});
	}, [companyId, retry]);

	return (
		<>
			{form ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: theme.spacing(4),
						padding: theme.spacing(2),
					}}
				>
					<AnswerProvider handleChangeAnswer={handleChangeAnswer}>
						<AuditForm
							form={form.domains}
							editQuestion={editQuestion}
							addQuestion={addQuestion}
							deleteQuestion={deleteQuestion}
						/>
					</AnswerProvider>
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						spacing={2}
						width="100%"
						padding={theme.spacing(2)}
						justifyContent="center"
					>
						<Button
							variant="contained"
							size="large"
							color="secondary"
							onClick={() => finalizeAudit()}
							sx={{
								backgroundColor: theme.palette.secondary.main,
								color: theme.palette.primary.main,
								flex: 1,
								"&:hover": {
									backgroundColor: theme.palette.secondary.light,
								},
							}}
						>
							Finalizar Auditoria
						</Button>
						<Button
							variant="contained"
							size="large"
							color="primary"
							onClick={() => saveData()}
							sx={{
								backgroundColor: theme.palette.primary.main,
								color: theme.palette.primary.contrastText,
								flex: 1,
								"&:hover": {
									backgroundColor: theme.palette.primary.light,
								},
							}}
						>
							Guardar Cambios
						</Button>
					</Stack>
				</Box>
			) : (
				<Backdrop sx={{ color: "#fff", zIndex: 30 }} open={true}>
					<CircularProgress size={100} />
				</Backdrop>
			)}
		</>
	);
}

export default Audit;
