import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import { SIDEBAR_WIDTH } from "../../utils/constants/auditor-constants";

const Sidebar = ({ open = true, items }) => {
    return (
        <Drawer
            variant="persistent"
            open={open}
            sx={{
                width: SIDEBAR_WIDTH,
                zIndex: 2,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: SIDEBAR_WIDTH,
                    boxSizing: "border-box",
                    zIndex: 2,
                },
            }}
        >
            <Toolbar />
            <List>
                {items ? (
                    items.map((item, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton onClick={() => item.function()}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
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
        </Drawer>
    );
};

export default Sidebar;
