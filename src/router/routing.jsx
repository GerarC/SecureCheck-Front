import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/auditor/home/Home";
import Login from "../pages/login/Login";
import Companies from "../pages/auditor/companies/Companies";
import AuditReport from "../pages/auditor/audit-report/AuditReport";
import { AuthenticationProvider } from "../provider/authentication-provider";
import ProtectedRoute from "./protected-routes";
import ROLES from "../utils/roles";
import Auditor from "../pages/auditor/Auditor";
import Form from "../pages/auditor/form/Form";
import CreateAccount from "../pages/create-account/Createaccount";
import Audits from "../pages/auditor/audits/Audits";
import {
    ROUTER_ABSOLUTE_AUDITOR_PATH,
    ROUTER_ABSOLUTE_LOGIN_PATH,
    ROUTER_ABSOLUTE_REGISTER_PATH,
    ROUTER_ABSOLUTE_ROOT_PATH,
    ROUTER_AUDITOR_COMPANIES_PATH,
    ROUTER_AUDITOR_COMPANY_AUDITS_PATH,
    ROUTER_AUDITOR_COMPANY_FORM_PATH,
    ROUTER_AUDIT_REPORT_PATH,
} from "../utils/constants/router-constants";

export default function Routing() {
    return (
        <AuthenticationProvider>
            <Routes>
                <Route
                    path={ROUTER_ABSOLUTE_ROOT_PATH}
                    element={<Navigate to={ROUTER_ABSOLUTE_LOGIN_PATH} replace />}
                />
                <Route path={ROUTER_ABSOLUTE_LOGIN_PATH} element={<Login />} />
                <Route
                    path={ROUTER_ABSOLUTE_REGISTER_PATH}
                    element={<CreateAccount />}
                />
                <Route
                    path={ROUTER_ABSOLUTE_AUDITOR_PATH}
                    element={
                        <ProtectedRoute allowedRoles={[ROLES.auditor, ROLES.admin]}>
                            <Auditor />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path={ROUTER_AUDITOR_COMPANIES_PATH}>
                        <Route index element={<Companies />} />
                        <Route
                            path={ROUTER_AUDITOR_COMPANY_FORM_PATH}
                            element={<Form />}
                        />
                        <Route
                            path={ROUTER_AUDITOR_COMPANY_AUDITS_PATH}
                            element={<Audits />}
                        />
                    </Route>
                    <Route path={ROUTER_AUDIT_REPORT_PATH} element={<AuditReport />} />
                </Route>
            </Routes>
        </AuthenticationProvider>
    );
}
