// Datatable.jsx
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Paper,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { controlsData } from "../../controlsData"; // Import the data

const Datatable = () => {
  return (
    <div className="datatable">
      {controlsData.map((category, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{category.category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell style={{ width: "20%" }}>Nombre Control</TableCell>
                    <TableCell style={{ width: "25%" }}>Descripción</TableCell>
                    <TableCell style={{ width: "25%" }}>Preguntas de Auditoría</TableCell>
                    <TableCell>Si-No</TableCell>
                    <TableCell style={{ width: "25%" }}>Comentarios</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {category.controls.map((control, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{control.number}</TableCell>
                      <TableCell>{control.name}</TableCell>
                      <TableCell>{control.description}</TableCell>
                      <TableCell>
                      {control.questions.map((question, index) => (
                        <Typography key={index} style={{ fontSize: "14px" }}>{question}</Typography>
                      ))}
                      </TableCell>
                      <TableCell>
                        <RadioGroup row>
                          <FormControlLabel value="Si" control={<Radio />} label="Si" />
                          <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                      </TableCell>
                      <TableCell>
                        <TextField
                          variant="outlined"
                          size="small"
                          defaultValue={control.comment}
                          multiline // This allows the text to wrap onto a new line
                          rows={7} // You can adjust this value to set the initial height of the text field
                          fullWidth // Ensures it takes the full width of the column
                          InputProps={{
                            style: { fontSize: '14px' }, // Modify this size to your preference
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Datatable;


