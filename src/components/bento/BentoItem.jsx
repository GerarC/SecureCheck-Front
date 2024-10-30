import { Box } from "@mui/material";

export default function BentoItem({ bgColor, hSpan = 1, vSpan = 1, children }) {
	return <Box sx={{
		backgroundColor: bgColor,
		gridColumn: `span ${hSpan}`,
		gridRow: `span ${vSpan}`,
		borderRadius: 4,
		padding: 4,
		//aspectRatio: `${hSpan}/${vSpan}`
		aspectRatio: `${hSpan / vSpan === 1 ? 1 : 0}`
	}}>{children}</Box>
}