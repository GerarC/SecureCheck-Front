import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./auditor.scss";
import { useState } from "react";
import { Dashboard, Logout, Work } from "@mui/icons-material";
import localStorageService from "../../services/local-storage";
import { Box, Toolbar, styled } from "@mui/material";
import { SIDEBAR_WIDTH } from "../../utils/constants/auditor-constants";

const Auditor = () => {
    const redirect = useNavigate();
    const [asideOpen, setAsideOpen] = useState(true);
    const asideItems = [
        {
            text: "Dashboard",
            icon: <Dashboard />,
            function: () => redirect("/auditor"),
        },
        {
            text: "Empresas",
            icon: <Work />,
            function: () => redirect("/auditor/empresas"),
        },
        {
            text: "Logout",
            icon: <Logout />,
            function: () => {
                localStorageService.clear();
                redirect("/login");
            },
        },
    ];

    return (
        <Box className="main-container">
            <Navbar handleMenu={() => setAsideOpen(!asideOpen)} />
                <Sidebar open={asideOpen} items={asideItems} />
                <Main open={asideOpen}>
                <Toolbar/>
                    <Outlet />
                </Main>
        </Box>
    );
};

const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: `${SIDEBAR_WIDTH}px`,
            },
        },
    ],
}));


export default Auditor;
