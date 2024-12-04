import { FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { AnswerContext } from "../../context/answer-context";
import {
	ANSWER_CONFORMING,
	ANSWER_NONCONFORMING,
	ANSWER_NOT_APPLICABLE,
} from "../../utils/constants/general-constants";

export default function ConformingRadioGroup({ control }) {
	const theme = useTheme();
	const handleChangeAnswer = useContext(AnswerContext)
	const [outcome, setOutcome] = useState(control.answer.outcome)

	return <FormControl>
		<RadioGroup
			row
			value={outcome}
			onChange={(e, value) => {
				control.answer.outcome = value
				setOutcome(value)
				handleChangeAnswer(control.answer);
			}}
		>
			<FormControlLabel
				value={ANSWER_CONFORMING}
				control={
					<Radio
						sx={{
							color: theme.palette.success.main,
							"&.Mui-checked": {
								color: theme.palette.success.main,
							},
						}}
					/>
				}
				label="Conforme"
			/>
			<FormControlLabel
				value={ANSWER_NONCONFORMING}
				control={
					<Radio
						sx={{
							color: theme.palette.error.main,
							"&.Mui-checked": {
								color: theme.palette.error.main,
							},
						}}
					/>
				}
				label="No conforme"
			/>
			<FormControlLabel
				value={ANSWER_NOT_APPLICABLE}
				control={
					<Radio
						sx={{
							color: theme.palette.success.main,
							"&.Mui-checked": {
								color: theme.palette.success.main,
							},
						}}
					/>
				}
				label="No aplica"
			/>
		</RadioGroup>
	</FormControl>

}