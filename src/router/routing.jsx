import { Route, Routes } from "react-router-dom";
import Home from "../pages/auditor/home/Home"
import Login from "../pages/login/Login";
import CreateAccount from "../pages/auditor/createaccount/Createaccount";
import List from "../pages/auditor/list/List";
import Single from "../pages/auditor/single/Single";
import New from "../pages/auditor/new/New";
import { AuthenticationProvider } from "../provider/authentication-provider";
import ProtectedRoute from "./protected-routes";
import ROLES from "../utils/roles";
import Auditor from "../pages/auditor/Auditor";
import Audit from "../pages/auditor/audit/audit";


function Routing() {
	return (
		<AuthenticationProvider>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Login />} />
				<Route path="/auditor"
					element={<ProtectedRoute allowedRoles={[ROLES.auditor, ROLES.admin]}>
						<Auditor />
					</ProtectedRoute>}>
					<Route index element={<Home />} />
					<Route path="crearcuenta" element={<CreateAccount />} />
					<Route path="auditoria/:id" element={<Audit />} />
					<Route path="empresas">
						<Route index element={<List />} />
						<Route path=":empresanit" element={<Single />} />
						<Route path="new" element={<New />} />
					</Route>
				</Route>
			</Routes>
		</AuthenticationProvider>
	);
}

export default Routing;
