import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Agregar nueva empresa</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput">
                <label>Nombre de empresa</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>NIT</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Correo electronico</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Dirección</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Teléfono</label>
                <input type="text" />
              </div>
              <button>Guardar empresa</button>
            </form>
          </div>
            </div>
            </div>
            </div>
  );
};


export default New;