import "./navbar.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuIcon } from "lucide-react";

const Navbar = ({ handleMenu }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                justifyItems: "center",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                justifyContent: "center",
                textJustify: "center",
            }}
            color="primary"
            enableColorOnDark
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
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        textDecoration: "none",
                    }}
                >
                    SecureCheck
                </Typography>
                <Box>
                    <AccountBoxIcon />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
