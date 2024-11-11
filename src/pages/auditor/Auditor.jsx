import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { Logout, SpaceDashboard, Work } from "@mui/icons-material";
import localStorageService from "../../services/local-storage";
import { Box, Toolbar, styled, useMediaQuery } from "@mui/material";
import { SIDEBAR_WIDTH } from "../../utils/constants/auditor-constants";

const Auditor = () => {
  const redirect = useNavigate();
  const [asideOpen, setAsideOpen] = useState(true);
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm")); 

  const asideItems = [
    {
      text: "Dashboard",
      icon: <SpaceDashboard color="primary" />,
      function: () => redirect("/auditor"),
    },
    {
      text: "Empresas",
      icon: <Work color="secondary" />,
      function: () => redirect("/auditor/companies"),
    },
    {
      text: "Logout",
      icon: <Logout color="error" />,
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
      <Main open={asideOpen} isSmallScreen={isSmallScreen}>
        <Toolbar />
        <Outlet />
      </Main>
    </Box>
  );
};

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "isSmallScreen",
})(({ theme, open, isSmallScreen }) => ({
  flexGrow: 1,
  padding: isSmallScreen ? theme.spacing(1) : theme.spacing(4),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: isSmallScreen ? 0 : `${SIDEBAR_WIDTH}px`, 
  }),
}));

export default Auditor;
