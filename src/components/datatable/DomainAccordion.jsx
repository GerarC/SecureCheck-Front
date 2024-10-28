import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ControlTable from "./ControlTable";

const DomainAccordion = ({ domain, domainIndex, handleChangeAnswer, deleteQuestion, editQuestion, addQuestion }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>{domain.index}.</strong> {domain.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ControlTable
          controls={domain.controls}
          domainIndex={domainIndex}
          handleChangeAnswer={handleChangeAnswer}
          deleteQuestion={deleteQuestion}
          editQuestion={editQuestion}
          addQuestion={addQuestion}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default DomainAccordion;
