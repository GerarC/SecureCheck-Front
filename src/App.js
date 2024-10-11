import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Createaccount from "./pages/createaccount/Createaccount";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Auditoriarapida from "./pages/auditoriarapida/Auditoriarapida";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="crearcuenta" element={<Createaccount />} />
              <Route path="auditoria" element={<Auditoriarapida />} />
              <Route path="empresas">
                <Route index element={<List />} />
                <Route path=":empresanit" element={<Single />} />
                <Route path="new" element={<New />} />
              
            </Route>
            
          </Route>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
