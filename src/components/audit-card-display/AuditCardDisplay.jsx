import React from "react";
import { Box } from "@mui/material";

export default function AuditCardDisplay({ children }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-between",
				gap: (theme) => theme.spacing(4),
				padding: (theme) => theme.spacing(4),
			}}
		>
			{React.Children.map(children, (child) => (
				<Box
					sx={{
						flex: "1 1 calc(25% - 24px)", // Allows for 4 cards in a row, considering gap
						borderRadius: 2,
						transition: "transform 0.3s ease, box-shadow 0.3s ease",
						'@media (max-width: 600px)': {
							flex: "1 1 calc(50% - 24px)", // 2 cards in a row on small screens
						},
						'@media (max-width: 400px)': {
							flex: "1 1 100%", // 1 card in a row on extra small screens
						},
					}}
				>
					{child}
				</Box>
			))}
		</Box>
	);
}
