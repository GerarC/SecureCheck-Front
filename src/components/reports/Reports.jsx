import { useTheme } from "@mui/material";
import { Box, Card, CardContent, Typography, Paper } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import ControlCard from "./ControlCard";

const getOutcomeText = (outcome, theme) => {
  switch (outcome) {
    case "CONFORMING":
      return { text: "Conforme", color: theme.palette.success.main };
    case "NONCONFORMING":
      return { text: "No conforme", color: theme.palette.error.main };
    case "NOT_APPLICABLE":
      return { text: "No aplica", color: theme.palette.info.main };
    default:
      return { text: "Desconocido", color: theme.palette.text.disabled };
  }
};

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const getAuditPieData = (stats, theme) => [
  { label: "Conforme", value: stats.conformingControls, color: theme.palette.success.main },
  { label: "No conforme", value: stats.nonConformingControls, color: theme.palette.error.main },
  { label: "No aplica", value: stats.notApplicableControls, color: theme.palette.info.main },
];

const PieChartWithCustomizedLabel = ({ data }) => {
  const TOTAL = data.reduce((sum, item) => sum + item.value, 0);
  const getArcLabel = (params) => `${((params.value / TOTAL) * 100).toFixed(0)}%`;

  return (
    <PieChart
      series={[{ outerRadius: 80, data, arcLabel: getArcLabel }]}
      sx={{
        minWidth: 500,
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
        },
      }}
      width={500}
      height={300}
    />
  );
};

const SectionCard = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Card sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      color: theme.palette.primary.contrastText,
      mb: theme.spacing(2),
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
    }}>
      <CardContent>
        <Typography variant="h6" color="primary">{title}</Typography>
        {children}
      </CardContent>
    </Card>
  );
};

const CompanyInfo = ({ company }) => {
  const theme = useTheme();
  return (
    <SectionCard title="Información de la Compañía">
      <Typography sx={{ mb: theme.spacing(1) }}>Nombre: {company.name}</Typography>
      <Typography sx={{ mb: theme.spacing(1) }}>NIT: {company.nit}</Typography>
      <Typography sx={{ mb: theme.spacing(1) }}>Dirección: {company.address}</Typography>
      <Typography sx={{ mb: theme.spacing(1) }}>Email: {company.contactEmail}</Typography>
      <Typography>Teléfono: {company.contactPhone}</Typography>
    </SectionCard>
  );
};

const AuditorInfo = ({ auditor }) => {
  const theme = useTheme();
  return (
    <SectionCard title="Información del Auditor">
      <Typography sx={{ mb: theme.spacing(1) }}>Nombre: {`${auditor.name} ${auditor.lastname}`}</Typography>
      <Typography sx={{ mb: theme.spacing(1) }}>Documento de Identidad: {auditor.identityDocument}</Typography>
      <Typography sx={{ mb: theme.spacing(1) }}>Email: {auditor.email}</Typography>
      <Typography>Teléfono: {auditor.phone}</Typography>
    </SectionCard>
  );
};

const ObjectiveAndComments = ({ objective, comment }) => {
  const theme = useTheme();
  return (
    <Box my={theme.spacing(4)}>
      <Card sx={{
        display: "flex",
        flexDirection: "column",
        color: theme.palette.primary.contrastText,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <CardContent>
          <Typography variant="h6" color="primary">Alcance de la Auditoría</Typography>
          <Typography>ISO 27001 del 2022</Typography>
          <Typography my={theme.spacing(4)} variant="h6" color="primary">Objetivo de la Auditoría</Typography>
          <Typography>{objective}</Typography>
          <Typography my={theme.spacing(4)} variant="h6" color="primary">Comentarios</Typography>
          <Typography>{comment}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const DomainStatistics = ({ domain }) => {
  const theme = useTheme();
  return (
    <Box my={theme.spacing(2)}>
      <Typography variant="subtitle1" color="primary">Estadísticas del Dominio:</Typography>
      <Typography>Controles Conformes: {domain.domainStatistic.conformingControls}</Typography>
      <Typography>Controles No Conformes: {domain.domainStatistic.nonConformingControls}</Typography>
      <Typography>Controles No Aplicables: {domain.domainStatistic.notApplicableControls}</Typography>
    </Box>
  );
};

const DomainSection = ({ domain }) => {
  const theme = useTheme();
  return (
    <Paper elevation={3} sx={{ p: theme.spacing(4), my: theme.spacing(4)}}>
      <Typography variant="h5" color="primary">{domain.name}</Typography>
      <Typography variant="body2" color="textSecondary">{domain.description}</Typography>
      <DomainStatistics domain={domain} />
      <Box display="flex" flexWrap="wrap" gap={theme.spacing(4)}>
        {domain.controls.map((control) => (
          <Box key={control.id} flex={1} minWidth={400} maxWidth={600}>
            <ControlCard domainIndex={domain.index} control={control} outcomeData={getOutcomeText(control.answer.outcome, theme)} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

const Report = ({ report }) => {
  const theme = useTheme();

  return (
    <Box container spacing={theme.spacing(4)}>
      <Box display="flex" flexDirection="column" justifyContent="center" mb={theme.spacing(2)}>
        <Typography variant="h4" color="primary" align="center">Información de Auditoría</Typography>
        <Box display="flex" justifyContent="space-between" my={theme.spacing(1)}>
          <Typography fontSize={18}>Fecha de inicio: {formatDate(report.startedAt)}</Typography>
          <Typography fontSize={18}>Fecha de finalización: {formatDate(report.endedAt)}</Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={theme.spacing(4)} my={theme.spacing(4)}>
        <Box flex={1} minWidth={300}><CompanyInfo company={report.company} /></Box>
        <Box flex={1} minWidth={300}><AuditorInfo auditor={report.auditor} /></Box>
      </Box>

      <ObjectiveAndComments objective={report.objective} comment={report.comment} />

      <Box my={theme.spacing(4)}>
        <SectionCard title="Resumen de Auditoría">
          <PieChartWithCustomizedLabel data={getAuditPieData(report.auditStatistic, theme)} />
        </SectionCard>
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={theme.spacing(2)} mt={theme.spacing(4)}>
          {report.domains.map((domain) => (
            <Box key={domain.id} flex={1} minWidth={500}>
              <SectionCard title={domain.name}>
                <PieChartWithCustomizedLabel data={getAuditPieData(domain.domainStatistic, theme)} />
              </SectionCard>
            </Box>
          ))}
        </Box>
      </Box>

      <Box my={theme.spacing(4)}>
        {report.domains.map((domain) => <DomainSection key={domain.id} domain={domain} />)}
      </Box>
    </Box>
  );
};

export default Report;
