import { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {
  Paper,
  Typography,
  Grid2,
  Divider,
  TextField,
  Button,
  Card,
  CardContent
} from '@mui/material';
import { Mail } from 'lucide-react';
import './reports.scss';

const CompanyInfoCard = ({ companyData }) => (
  <Card className="info-card">
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Datos de la Empresa
      </Typography>
      <Divider />
      <div className="info-item">
        <Typography variant="subtitle1">Nombre: {companyData.name}</Typography>
        <Typography variant="subtitle1">NIT: {companyData.nit}</Typography>
        <Typography variant="subtitle1">Dirección: {companyData.address}</Typography>
        <Typography variant="subtitle1">Correo: {companyData.contactEmail}</Typography>
        <Typography variant="subtitle1">Teléfono: {companyData.contactPhone}</Typography>
      </div>
    </CardContent>
  </Card>
);

const AuditorInfoCard = ({ auditorData }) => (
  <Card className="info-card">
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Datos del Auditor
      </Typography>
      <Divider />
      <div className="info-item">
        <Typography variant="subtitle1">Nombre: {auditorData.name} {auditorData.lastname}</Typography>
        <Typography variant="subtitle1">ID: {auditorData.identityDocument}</Typography>
        <Typography variant="subtitle1">Correo: {auditorData.email}</Typography>
        <Typography variant="subtitle1">Teléfono: {auditorData.phone}</Typography>
      </div>
    </CardContent>
  </Card>
);

const DomainResultCard = ({ domain }) => (
  <Card className="domain-card">
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {domain.name}
      </Typography>
      <div className="domain-stats">
        <div className="stats-text">
          <Typography>Controles validados (SI): {domain.yes}</Typography>
          <Typography>Controles No validados (NO): {domain.no}</Typography>
          <Typography>
            Porcentaje de validación: {((domain.yes / (domain.yes + domain.no)) * 100).toFixed(1)}%
          </Typography>
        </div>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: domain.yes, label: 'SI', color: '#4CAF50' },
                { id: 1, value: domain.no, label: 'NO', color: '#f44336' }
              ],
            },
          ]}
          width={200}
          height={200}
        />
      </div>
    </CardContent>
  </Card>
);

const TotalResultsCard = ({ totalYes, totalNo, totalYesPercentage, totalNoPercentage }) => (
  <Card className="total-results-card">
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Resultados Totales
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={6}>
          <div className="total-stats">
            <Typography>
              Total Controles validados (SI): {totalYes} ({totalYesPercentage}%)
            </Typography>
            <Typography>
              Total Controles No validados (NO): {totalNo} ({totalNoPercentage}%)
            </Typography>
          </div>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: totalYes, label: 'SI', color: '#4CAF50' },
                  { id: 1, value: totalNo, label: 'NO', color: '#f44336' }
                ],
              },
            ]}
            width={300}
            height={200}
          />
        </Grid2>
      </Grid2>
    </CardContent>
  </Card>
);

const FinalObservations = ({ finalObservations, setFinalObservations }) => (
  <div className="final-observations">
    <Typography variant="h6" gutterBottom>
      Observaciones Finales
    </Typography>
    <TextField
      fullWidth
      multiline
      rows={4}
      variant="outlined"
      value={finalObservations}
      onChange={(e) => setFinalObservations(e.target.value)}
    />
  </div>
);

const Reports = ({ auditData, companyData, auditorData }) => {
  const [finalObservations, setFinalObservations] = useState('');

  const domains = [
    { name: 'Controles organizacionales', yes: 15, no: 5 },
    { name: 'Controles de personas', yes: 12, no: 8 },
    { name: 'Controles físicos', yes: 18, no: 2 },
    { name: 'Controles tecnológicos', yes: 20, no: 5 }
  ];
	
  const auditor = {
	  name: "Juan",
	  lastname:"Juantonez",
	  identityDocument: "15456778978",
	  phone: "+573245465575"
  }

  const company = {
	id: "ertyiujypoi456",
	nit: "2345346457",
	name: "Empresa xx-d",
	address: "Calle mala",
	contactEmail: "empresa@empresa.com",
	contactPhone: "+563332224356",
	createdAt: "2024-11-03T22:56:53.974Z"
  }

  const totalControls = domains.reduce((acc, domain) => acc + domain.yes + domain.no, 0);
  const totalYes = domains.reduce((acc, domain) => acc + domain.yes, 0);
  const totalNo = domains.reduce((acc, domain) => acc + domain.no, 0);
  const totalYesPercentage = ((totalYes / totalControls) * 100).toFixed(1);
  const totalNoPercentage = ((totalNo / totalControls) * 100).toFixed(1);

  const handleSendEmail = () => {
    console.log('Sending email...');
  };

  return (
    <div className="report-container">
      <Paper elevation={3} className="report-paper">
        <div className="report-header">
          <Typography variant="h4" gutterBottom>
            Reporte de Auditoría ISO
          </Typography>

          <Grid2 container spacing={4}>
            <Grid2 item xs={12} md={6}>
              <CompanyInfoCard companyData={company} />
            </Grid2>
            <Grid2 item xs={12} md={6}>
              <AuditorInfoCard auditorData={auditor} />
            </Grid2>
          </Grid2>
        </div>

        <div className="report-results">
          <Typography variant="h5" gutterBottom className="section-title">
            Resultados por Dominio
          </Typography>
          
          <Grid2 container spacing={4}>
            {domains.map((domain, index) => (
              <Grid2 item xs={12} md={6} key={index}>
                <DomainResultCard domain={domain} />
              </Grid2>
            ))}
          </Grid2>

          <TotalResultsCard
            totalYes={totalYes}
            totalNo={totalNo}
            totalYesPercentage={totalYesPercentage}
            totalNoPercentage={totalNoPercentage}
          />
        </div>

        <FinalObservations
          finalObservations={finalObservations}
          setFinalObservations={setFinalObservations}
        />

        <div className="send-button-container">
          <Button
            variant="contained"
            color="primary"
            startIcon={<Mail />}
            onClick={handleSendEmail}
            size="large"
          >
            Enviar por correo electrónico
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Reports;
