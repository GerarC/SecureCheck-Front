import { Box, useTheme } from "@mui/material";

export default function BentoItem({
	bgColor,
	hSpan = 1,
	vSpan = 1,
	children,
	borderRadius = 4,
	padding = 2,
}) {
	const theme = useTheme();
	const gap = parseInt(theme.spacing(4));

	const getAspectRatio = (vSpan, hSpan) => {
		const adjustedHeight = vSpan * 100 - (gap * vSpan) / (100 / hSpan);
		const adjustedWidth = hSpan * 100 - (gap * hSpan) / (100 / vSpan);
		if (adjustedWidth / adjustedHeight === 1)
			return `${adjustedWidth} / ${adjustedHeight}`;
	};

	return (
		<Box
			sx={{
				backgroundColor: bgColor || "transparent",
				borderRadius: theme.spacing(borderRadius),
				padding: theme.spacing(padding),
				gridColumn: `span ${hSpan}`,
				gridRow: `span ${vSpan}`,
				position: "relative",
				overflow: "hidden",
				width: "100%",
				aspectRatio: getAspectRatio(vSpan, hSpan),
			}}
		>
			{children}
		</Box>
	);
}
