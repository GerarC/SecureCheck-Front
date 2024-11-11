import { Box, Typography, Divider, Stack, useTheme, useMediaQuery } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const InfoRow = ({ icon: Icon, label, value }) => {
    const theme = useTheme();
    return (
        <Stack direction="row" alignItems="center" spacing={1} justifyContent="center"> {/* Center items */}
            <Icon sx={{ color: theme.palette.secondary.main, fontSize: "1.5rem" }} />
            <Typography 
                variant="body1" 
                sx={{ color: theme.palette.text.secondary }}
            >
                <strong style={{ color: theme.palette.secondary.main }}>{label}:</strong> {value}
            </Typography>
        </Stack>
    );
};

export default function CompanyInfo({ company }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                width: "100%",
                padding: theme.spacing(4),
                color: theme.palette.primary.main,
                borderBottom: `2px solid ${theme.palette.divider}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    mb: theme.spacing(1),
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    fontSize: isSmallScreen ? "1.5rem" : "2rem",
                }}
            >
                {company.name}
            </Typography>
            <Divider 
                sx={{ 
                    width: "100%", 
                    mb: theme.spacing(2), 
                    borderColor: theme.palette.divider, 
                    opacity: 0.8 
                }} 
            />

            <Stack spacing={1.5} width="100%"> 
                <InfoRow icon={BusinessIcon} label="NIT" value={company.nit} />
                <InfoRow icon={LocationOnIcon} label="Address" value={company.address} />
                <InfoRow icon={EmailIcon} label="Email" value={company.contactEmail} />
                <InfoRow icon={PhoneIcon} label="Phone" value={company.contactPhone} />
            </Stack>
        </Box>
    );
}
