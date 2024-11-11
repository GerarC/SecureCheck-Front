import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Box,
	useTheme,
	useMediaQuery,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import ControlTable from "./ControlTable";
  
  const DomainAccordion = ({
	domain,
	domainIndex,
	
	deleteQuestion,
	editQuestion,
	addQuestion,
  }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
	return (
	  <Accordion sx={{ mb: theme.spacing(2) }}>
		<AccordionSummary expandIcon={<ExpandMoreIcon />}>
		  <Typography variant={isSmallScreen ? "h6" : "h5"} color="primary">
			<strong>{domain.index}.</strong> {domain.name}
		  </Typography>
		</AccordionSummary>
		<AccordionDetails sx={{ p: isSmallScreen ? theme.spacing(1) : theme.spacing(2) }}>
		  <Box sx={{ width: "100%", overflowX: 'auto' }}>
			<ControlTable
			  controls={domain.controls}
			  domainIndex={domainIndex}
			  deleteQuestion={deleteQuestion}
			  editQuestion={editQuestion}
			  addQuestion={addQuestion}
			/>
		  </Box>
		</AccordionDetails>
	  </Accordion>
	);
  };
  
  export default DomainAccordion;
  
