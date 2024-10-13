import "./new.scss"

const New = () => {
  return (
    <div className="new">
      <div className="newContainer">
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