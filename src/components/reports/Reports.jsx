import { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { 
  Paper, 
  Typography, 
  Grid, 
  Divider, 
  Box,
  TextField,
  Button,
  Card,
  CardContent
} from '@mui/material';
import { Mail } from 'lucide-react';
import './reports.scss';

const Reports = ({ auditData, companyData, auditorData }) => {
  const [finalObservations, setFinalObservations] = useState('');
  
  // Mock data - replace with actual data from your audit
  const domains = [
    { name: 'Controles organizacionales', yes: 15, no: 5 },
    { name: 'Controles de personas', yes: 12, no: 8 },
    { name: 'Controles físicos', yes: 18, no: 2 },
    { name: 'Controles tecnológicos', yes: 20, no: 5 }
  ];

  const totalControls = domains.reduce((acc, domain) => acc + domain.yes + domain.no, 0);
  const totalYes = domains.reduce((acc, domain) => acc + domain.yes, 0);
  const totalNo = domains.reduce((acc, domain) => acc + domain.no, 0);
  const totalYesPercentage = ((totalYes / totalControls) * 100).toFixed(1);
  const totalNoPercentage = ((totalNo / totalControls) * 100).toFixed(1);

  const handleSendEmail = () => {
    // Implement email sending logic
    console.log('Sending email...');
  };

  return (
    <div className="report-container">
      <Paper elevation={3} className="report-paper">
        {/* Header Section */}
        <div className="report-header">
          <Typography variant="h4" gutterBottom>
            Reporte de Auditoría ISO
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="info-card">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Datos de la Empresa
                  </Typography>
                  <Divider />
                  <div className="info-item">
                    <Typography variant="subtitle1">Nombre: Empresa XYZ</Typography>
                    <Typography variant="subtitle1">NIT: 123456789</Typography>
                    <Typography variant="subtitle1">Dirección: Calle Principal #123</Typography>
                    <Typography variant="subtitle1">Correo: empresa@xyz.com</Typography>
                    <Typography variant="subtitle1">Teléfono: +57 1234567</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card className="info-card">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Datos del Auditor
                  </Typography>
                  <Divider />
                  <div className="info-item">
                    <Typography variant="subtitle1">Nombre: Juan Pérez</Typography>
                    <Typography variant="subtitle1">ID: AUD-001</Typography>
                    <Typography variant="subtitle1">Correo: juan@auditores.com</Typography>
                    <Typography variant="subtitle1">Teléfono: +57 9876543</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card className="dates-card">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    Fecha de inicio: {new Date().toLocaleDateString()}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    Fecha de finalización: {new Date().toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="report-results">
          <Typography variant="h5" gutterBottom className="section-title">
            Resultados por Dominio
          </Typography>
          
          <Grid container spacing={4}>
            {domains.map((domain, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card className="domain-card">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {domain.name}
                    </Typography>
                    <div className="domain-stats">
                      <div className="stats-text">
                        <Typography>
                          Controles validados (SI): {domain.yes}
                        </Typography>
                        <Typography>
                          Controles No validados (NO): {domain.no}
                        </Typography>
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
              </Grid>
            ))}
          </Grid>

          {/* Total Results */}
          <Card className="total-results-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resultados Totales
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className="total-stats">
                    <Typography>
                      Total Controles validados (SI): {totalYes} ({totalYesPercentage}%)
                    </Typography>
                    <Typography>
                      Total Controles No validados (NO): {totalNo} ({totalNoPercentage}%)
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
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
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        {/* Final Observations */}
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

        {/* Send Button */}
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