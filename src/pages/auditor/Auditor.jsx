import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import './auditor.scss'

const Auditor = () => {
	return (
		<div className="main-container">
			<Navbar />
			<div className="view-container">
				<Sidebar />
				<div className="view">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Auditor
