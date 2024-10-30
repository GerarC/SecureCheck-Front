import { Typography, useTheme } from "@mui/material"
import "./home.scss"
import { HOME_RESUME, HOME_SUBTITLE, HOME_TITLE } from "../../../utils/constants/auditor-constants"
import BentoBox from "../../../components/bento/BentoBox"
import BentoItem from "../../../components/bento/BentoItem"

const Home = () => {
	const theme = useTheme()
	return (
		<BentoBox>
			<BentoItem hSpan={2} bgColor={theme.palette.primary.contrastText}>
				<Typography variant="h3" fontWeight="bold" color="primary">{HOME_TITLE}</Typography>
				<Typography variant="h5" fontWeight="light" color="secondary" marginBottom={4}>{HOME_SUBTITLE}</Typography>
				<Typography color="primary">{HOME_RESUME}</Typography>
			</BentoItem>
			<BentoItem bgColor={theme.palette.success.main}>
				<Typography variant="h3" fontWeight="bold" color="primary" textAlign={"center"} width="100%" >Agrega empresas y audítalas!</Typography>
			</BentoItem>
			<BentoItem vSpan={2} bgColor={theme.palette.error.main}>
				<Typography variant="h3" fontWeight="bold" color="primary" width="100%">Más contenido</Typography>
			</BentoItem>
			<BentoItem bgColor={theme.palette.success.main}></BentoItem>
			<BentoItem vSpan={2} hSpan={2} bgColor={theme.palette.primary.main}></BentoItem>
			<BentoItem bgColor={theme.palette.primary.main}></BentoItem>
			<BentoItem bgColor={theme.palette.primary.main}></BentoItem>
		</BentoBox>
	)
}

export default Home
