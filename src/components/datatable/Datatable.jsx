import { useEffect, useState } from "react";
import { Backdrop, CircularProgress, } from "@mui/material";
import DomainAccordion from "./DomainAccordion";
import "./datatable.scss";

const Datatable = ({ form, handleChangeAnswer, deleteQuestion, editQuestion, addQuestion }) => {
	const [formData, setFormData] = useState(form);

	useEffect(() => {
		setFormData(form);
	}, [form]);

	return (
		<div className="datatable">
			{formData ? (
				formData.map((domain) => (
					<DomainAccordion
						key={domain.id}
						domain={domain}
						domainIndex={domain.index}
						handleChangeAnswer={handleChangeAnswer}
						deleteQuestion={deleteQuestion}
						editQuestion={editQuestion}
						addQuestion={addQuestion}
					/>
				))
			) : (
				<Backdrop sx={{ color: "#fff", zIndex: 30 }} open={true}>
					<CircularProgress size={100} />
				</Backdrop>
			)}
		</div>
	);
};

export default Datatable;
