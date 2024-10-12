import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import CreateAccount from "../pages/createaccount/Createaccount";
import Auditoriarapida from "../pages/auditoriarapida/Auditoriarapida";
import List from "../pages/list/List";
import Single from "../pages/single/Single";
import New from "../pages/new/New";


function Routing() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="crearcuenta" element={<CreateAccount />} />
        <Route path="auditoria" element={<Auditoriarapida />} />
        <Route path="empresas">
          <Route index element={<List />} />
          <Route path=":empresanit" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
