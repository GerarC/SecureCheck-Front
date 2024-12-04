import { Typography, useTheme } from "@mui/material";
import "./home.scss";
import { HOME_RESUME, HOME_SUBTITLE, HOME_TITLE } from "../../../utils/constants/auditor-constants";
import BentoBox from "../../../components/bento/BentoBox";
import BentoItem from "../../../components/bento/BentoItem";

const Home = () => {
    const theme = useTheme();
    
    return (
        <BentoBox columnCount={4}>
            <BentoItem hSpan={2} bgColor={theme.palette.primary.contrastText}>
                <Typography variant="h3" fontWeight="bold" color="primary" textAlign="left">
                    {HOME_TITLE}
                </Typography>
                <Typography variant="h5" fontWeight="300" color={theme.palette.secondary.main} marginBottom={4}>
                    {HOME_SUBTITLE}
                </Typography>
                <Typography color="primary" lineHeight={1.5}>
                    {HOME_RESUME}
                </Typography>
            </BentoItem>
            <BentoItem bgColor={theme.palette.secondary.main} borderRadius={2}>
                <Typography variant="h4" fontWeight="bold" color="primary" textAlign="center" padding={2}>
                    Agrega empresas y audítalas!
                </Typography>
            </BentoItem>
            <BentoItem vSpan={2} bgColor={theme.palette.error.main} borderRadius={2}>
                <Typography variant="h4" fontWeight="bold" color="primary.contrastText" textAlign="center" padding={2}>
                    Más contenido
                </Typography>
            </BentoItem>
            <BentoItem bgColor={theme.palette.success.main} borderRadius={2}>
                <Typography variant="h6" fontWeight="500" color="primary" textAlign="center" padding={2}>
                    A brief description or action can go here.
                </Typography>
            </BentoItem>
            <BentoItem vSpan={2} hSpan={2} bgColor={theme.palette.primary.main} borderRadius={2}>
                <Typography variant="h5" fontWeight="bold" color="primary.contrastText" textAlign="center" padding={2}>
                    Discover more insights and tools for effective auditing!
                </Typography>
            </BentoItem>
            <BentoItem bgColor={theme.palette.warning.main} borderRadius={2}>
                <Typography variant="h6" fontWeight="500" color="primary" textAlign="center" padding={2}>
                    Important updates or notices could be placed here.
                </Typography>
            </BentoItem>
            <BentoItem bgColor={theme.palette.info.main} borderRadius={2}>
                <Typography variant="h6" fontWeight="500" color="primary" textAlign="center" padding={2}>
                    Learn about our new features and improvements.
                </Typography>
            </BentoItem>
        </BentoBox>
    );
};

export default Home;
