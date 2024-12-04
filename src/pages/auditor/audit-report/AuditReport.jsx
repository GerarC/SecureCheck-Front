import { useParams } from "react-router-dom";
import Report from "../../../components/reports/Reports";
import { useEffect, useState, useRef } from "react";
import auditService from "../../../services/api/audit-service";
import { enqueueSnackbar } from "notistack";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation
import { Button } from "@mui/material"; // Import a button component for triggering PDF generation

const AuditReport = () => {
	const { id: auditId } = useParams();
	const [report, setReport] = useState(null);
	const reportRef = useRef(); // Reference to the report container for PDF generation

	useEffect(() => {
		auditService.getAuditReport(auditId)
			.then(response => {
				if (response.ok) return response.json();
				else return response.json()
					.then(error => enqueueSnackbar(error.message, {
						variant: "error"
					}));
			})
			.then(fetchedReport => setReport(fetchedReport));
	}, [auditId]);

	const generatePDF = () => {
		const doc = new jsPDF({
		  orientation: "p",
		  unit: "px",
		  format: "a4", 
		  putOnlyUsedFonts: true, 
		  compress: true,
		  precision: 8,
		});
	  
		const margin = 10;
	  
		const pageWidth = doc.internal.pageSize.width - 2 * margin;
	  
		doc.html(reportRef.current, {
		  margin: [margin, margin], 
		  width: pageWidth,
		  callback: (doc) => {
			doc.save(`${report.company.name}-${report.startedAt}.pdf`);
		  },
		  x: margin,
		  y: margin,
		  html2canvas: {
			scale: 0.28,
			logging: false,
			useCORS: true,
			dpi: 300, 
			backgroundColor: "#fff", 
		  },
		});
	  };
	  ;

	return (
		<div className="audit-report-container">
			{report ? (
				<>
					<Button
						variant="contained"
						color="primary"
						onClick={generatePDF}
						sx={{ mb: 2 }}
					>
						Generate PDF
					</Button>
					{/* Report component wrapped in a div that can be referenced for PDF */}
					<div ref={reportRef}>
						<Report report={report} />
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default AuditReport;
