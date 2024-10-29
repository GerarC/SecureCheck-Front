import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import QuestionsList from "./QuestionsList";

const ControlTable = ({
  controls,
  domainIndex,
  handleChangeAnswer,
  deleteQuestion,
  editQuestion,
  addQuestion,
}) => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              color="primary"
              sx={{
                width: "3%",
                fontWeight: "bold",
                borderBottom: `1px solid ${theme.palette.secondary.light}`,
              }}
            >
              <Typography color="primary" variant="h6">
                #
              </Typography>
            </TableCell>
            <TableCell
              color="primary"
              sx={{
                width: "15%",
                fontWeight: "bold",
                borderBottom: `1px solid ${theme.palette.secondary.light}`,
              }}
            >
              <Typography color="primary" variant="h6">
                Nombre Control
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                width: "20%",
                fontWeight: "bold",
                borderBottom: `1px solid ${theme.palette.secondary.light}`,
              }}
            >
              <Typography color="primary" variant="h6">
                Descripción
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                width: "32%",
                fontWeight: "bold",
                borderBottom: `1px solid ${theme.palette.secondary.light}`,
              }}
            >
              <Typography color="primary" variant="h6">
                {" "}
                Preguntas
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                width: "5%",
                fontWeight: "bold",
                borderBottom: `1px solid ${theme.palette.secondary.light}`,
              }}
            >
              <Typography color="primary" variant="h6">
                Válido
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                width: "25%",
                fontWeight: "bold",
                borderBottom: `1px solid ${theme.palette.secondary.light}`,
                padding: 0,
              }}
            >
              {" "}
              <Typography color="primary" variant="h6">
                Comentarios
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {controls.map((control) => (
            <TableRow key={control.id}>
              <TableCell
                sx={{
                  fontWeight: "bold",
                }}
              >
                <Typography fontWeight={"bold"}>
                  {domainIndex}.{control.index}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>{control.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{control.description}</Typography>
              </TableCell>
              <TableCell>
                <QuestionsList
                  domainIndex={domainIndex}
                  controlIndex={control.index}
                  control={control}
                  deleteQuestion={deleteQuestion}
                  editQuestion={editQuestion}
                  addQuestion={addQuestion}
                  handleChangeAnswer={handleChangeAnswer}
                />
              </TableCell>
              <TableCell>
                <RadioGroup
                  row
                  name={`control-validity-${control.id}`}
                  onChange={(e) => {
                    const answer = control.answer;
                    answer.done = e.target.value === "yes" ? true : false;
                    handleChangeAnswer(answer);
                  }}
                >
                  <FormControlLabel
                    value="yes"
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
                    label="Sí"
                  />
                  <FormControlLabel
                    value="no"
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
                    label="No"
                  />
                </RadioGroup>
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  placeholder="Comentarios"
                  onChange={(e) => {
                    const answer = control.answer;
                    answer.comment = e.target.value;
                    handleChangeAnswer(answer);
                  }}
                  fullWidth
                  multiline
                  minRows={2}
                  maxRows={3}
                  sx={{ flexGrow: 4, padding: "4px 0" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ControlTable;
