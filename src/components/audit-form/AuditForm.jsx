import { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Box } from "@mui/material";
import DomainAccordion from "./DomainAccordion";

const AuditForm = ({ form, deleteQuestion, editQuestion, addQuestion }) => {
	const [formData, setFormData] = useState(form);

	useEffect(() => {
		setFormData(form);
	}, [form]);

	return (
		<Box sx={{ padding: theme => theme.spacing(2), overflowX: 'auto' }}>
			{formData ? (
				formData.map((domain) => (
					<Box key={domain.id} sx={{ marginBottom: theme => theme.spacing(2) }}>
						<DomainAccordion
							domain={domain}
							domainIndex={domain.index}
							deleteQuestion={deleteQuestion}
							editQuestion={editQuestion}
							addQuestion={addQuestion}
						/>
					</Box>
				))
			) : (
				<Backdrop sx={{ color: "#fff", zIndex: 30 }} open={true}>
					<CircularProgress size={100} />
				</Backdrop>
			)}
		</Box>
	);
};

export default AuditForm;
