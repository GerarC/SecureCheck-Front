import DashboardIcon from "@mui/icons-material/Dashboard";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	Box,
	useTheme,
	useMediaQuery
} from "@mui/material";
import { SIDEBAR_WIDTH } from "../../utils/constants/auditor-constants";

const Sidebar = ({ open = true, items }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Drawer
			variant={isSmallScreen ? "temporary" : "persistent"}
			open={open}
			sx={{
				width: SIDEBAR_WIDTH,
				zIndex: 2,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: SIDEBAR_WIDTH,
					boxSizing: "border-box",
					zIndex: 2,
					overflow: 'hidden', 
				},
			}}
		>
			<Toolbar />
			<Box sx={{ overflowY: 'auto' }}> 
				<List>
					{items ? (
						items.map((item, index) => (
							<ListItem disablePadding key={index}>
								<ListItemButton onClick={() => item.function()}>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={<Typography variant="body1" color="primary">{item.text}</Typography>} />
								</ListItemButton>
							</ListItem>
						))
					) : (
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<DashboardIcon />
								</ListItemIcon>
								<ListItemText primary="Dashboard" />
							</ListItemButton>
						</ListItem>
					)}
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
