import { useTheme } from "@emotion/react";
import { AppBar, Box, IconButton, Toolbar, Typography, } from "@mui/material";
import { MenuIcon } from "lucide-react";
import Logo from "../../assets/securecheck-no-background.png";
import { APPLICATION_NAME } from "../../utils/constants/general-constants";

const Navbar = ({ handleMenu }) => {
	const theme = useTheme();

	return (
		<AppBar
			position="fixed"
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
				backgroundColor: theme.palette.background.default,
				color: theme.palette.secondary.main,
			}}
		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 1 }}
					onClick={() => handleMenu()}
				>
					<img src={Logo} alt="Logo" style={{ aspectRatio: "315/375", height: "40px" }} />
				</IconButton>
				<Typography
					variant="h5"
					component="div"
					letterSpacing={2}
					sx={{
						flexGrow: 1,
						display: { xs: "none", md: "flex" }, 
						fontFamily: "monospace",
						fontWeight: 700,
						textDecoration: "none",
					}}
				>
					{APPLICATION_NAME}
				</Typography>
				<Box
					sx={{
						display: { xs: "flex", md: "none" }, 
					}}
				>
					<IconButton
						color="inherit"
						aria-label="menu"
						onClick={() => handleMenu()}
					>
						<MenuIcon />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
