import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"

export default function BentoBox({ columnCount = 4, children }) {
	console.log(children)
	const theme = useTheme()
	return <Box id="BentoBox" sx={{
		display: "grid",
		gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
		gridTemplateRows: `repeat(${children.length / columnCount}, minmax(0, 1fr))`,
			gridAutoRows: "max",
		gap: theme.spacing(4)
	}}>
		{children}
	</Box>
}