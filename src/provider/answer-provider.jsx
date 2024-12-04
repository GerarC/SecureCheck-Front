import { AnswerContext } from "../context/answer-context";

const AnswerProvider = ({ children, handleChangeAnswer }) => (
	<AnswerContext.Provider value={handleChangeAnswer}>
		{children}
	</AnswerContext.Provider>
);

export default AnswerProvider