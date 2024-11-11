import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

export default function BentoBox({ children }) {
	const theme = useTheme();
	const gap = theme.spacing(4);

	const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));
	const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
	const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));

	let columnCount;
	if (isLgScreen) {
		columnCount = 4;
	} else if (isMdScreen) {
		columnCount = 3;
	} else if (isSmScreen) {
		columnCount = 2;
	} else {
		columnCount = 1;
	}

	const rowCount = Math.ceil(React.Children.count(children) / columnCount);

	return (
		<Box
			id="BentoBox"
			sx={{
				display: "grid",
				gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
				gridTemplateRows: `repeat(${rowCount}, 1fr)`,
				gap: gap,
				width: "100%",
				overflow: "hidden",
			}}
		>
			{children}
		</Box>
	);
}
