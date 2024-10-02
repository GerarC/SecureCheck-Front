import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top"><span className="logo">Centro Auditor</span></div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title"> </p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title"> </p>
          <li>
            <Link to="/empresas" style={{ textDecoration: "none", color: "inherit" }}>
              <BusinessOutlinedIcon className="icon"/>
              <span>Empresas</span>
            </Link>
          </li>
          <li>
              <GradingOutlinedIcon className="icon"/>
              <span>Nueva Auditoria</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
