import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import './auditor.scss'

const Auditor = () => {
	return (
		<div className="auditor">
			<Sidebar />
			<div className="auditorContainer">
				<Navbar />
				<Outlet />
			</div>
		</div>
	)
}

export default Auditor
