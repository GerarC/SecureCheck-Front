import { Box, Card, CardContent, Typography, Divider, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ControlCard = ({ domainIndex, control, outcomeData }) => {
	const theme = useTheme();

	return (
		<Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', minWidth: 400 }}>
			<CardContent sx={{ flexGrow: 1 }}>
				{/* Title with Domain and Control Index */}
				<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: theme.spacing(1) }}>
					{/* Control Title with Index */}
					<Typography
						variant="h6"
						sx={{
							color: 'text.primary',
							marginBottom: theme.spacing(1),
						}}
					>
						{domainIndex}.{control.index} {control.name}
					</Typography>

					{/* Outcome Tag */}
					<Chip
						label={outcomeData.text}
						sx={{
							backgroundColor: outcomeData.color,
							color: theme.palette.getContrastText(outcomeData.color),
							borderRadius: '16px',
							fontWeight: 'bold',
							padding: theme.spacing(0.5, 2),
							alignSelf: 'flex-start',  
						}}
					/>
				</Box>


				{/* Description and Questions */}
				<Typography variant="body1" color="text.secondary" sx={{ mb: theme.spacing(2) }}>
					{control.description}
				</Typography>

				<Typography
					variant="h6"
					sx={{
						color: 'text.primary',
						marginTop: theme.spacing(1),
						fontSize: 20
					}}
				>
					Preguntas
				</Typography>

				{/* Questions and Outcome */}
				{control.questions.map((question) => (
					<Box key={question.id} sx={{ marginBottom: theme.spacing(2) }}>
						<Typography variant="h6" color="primary" sx={{ fontSize: '1.1rem' }}>
							{question.body}
						</Typography>
					</Box>
				))}
			</CardContent>

			{/* Divider between content and comments */}
			<Divider/>

			{/* Comments section */}
			<CardContent sx={{ marginTop: 'auto' }}>
				<Typography variant="body1" sx={{ color: outcomeData.color, fontSize: '1.1rem', marginBottom: theme.spacing(2)}}>
					Estado: {outcomeData.text}
				</Typography>
				<Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.1rem' }}>
					<strong>Comentario:</strong> {control.answer.comment}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ControlCard;
