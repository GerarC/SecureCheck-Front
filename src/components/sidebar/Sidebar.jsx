import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import localStorageService from '../../services/local-storage';

const Sidebar = () => {
	
	function handleLogOutClick() {
		localStorageService.clear()
	}
	
	return (
		<div className='sidebar'>
			<div className="top"><span className="logo">Centro Auditor</span></div>
			<hr />
			<div className="center">
				<ul>
					<p className="title"> </p>
					<li>
						<Link to="/auditor" style={{ textDecoration: "none", color: "inherit" }}>
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</Link>
					</li>
					<p className="title"> </p>
					<li>
						<Link to="/auditor/empresas" style={{ textDecoration: "none", color: "inherit" }}>
							<GradingOutlinedIcon className="icon" />
							<span>Auditar Empresas</span>
						</Link>
					</li>
					{/*<li>
              <BusinessOutlinedIco className="icon"/>
              <span>Nueva Auditoria</span>
          </li>*/}
					<li>
						<Link to="/" onClick={handleLogOutClick}>
							<ExitToAppOutlinedIcon className="icon" />
							<span>Logout</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
