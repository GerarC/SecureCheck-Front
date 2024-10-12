import { useState } from 'react';
import './empresastable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const Empresastable = () => {
  const [data, setData] = useState([
    { nit: 1, nombre: 'Jon Snow', direccion: 'Winterfell', correo: 'jon@example.com', telefono: '123-456-7890', estado: 'Auditar' },
    { nit: 2, nombre: 'Cersei Lannister', direccion: 'Casterly Rock', correo: 'cersei@example.com', telefono: '987-654-3210', estado: 'Activa' },
    { nit: 3, nombre: 'Jaime Lannister', direccion: 'Kingsguard', correo: 'jaime@example.com', telefono: '456-789-1234', estado: 'Finalizada' },
    { nit: 4, nombre: 'Arya Stark', direccion: 'Winterfell', correo: 'arya@example.com', telefono: '321-654-9870', estado: 'Auditar' },
    { nit: 5, nombre: 'Daenerys Targaryen', direccion: 'Dragonstone', correo: 'dany@example.com', telefono: '159-753-8462', estado: 'Activa' },
    { nit: 6, nombre: 'Melisandre', direccion: 'Asshai', correo: 'melisandre@example.com', telefono: '951-357-2468', estado: 'Finalizada' },
    { nit: 7, nombre: 'Ferrara Clifford', direccion: 'Volantis', correo: 'ferrara@example.com', telefono: '789-123-4560', estado: 'Auditar' },
    { nit: 8, nombre: 'Rossini Frances', direccion: 'Braavos', correo: 'rossini@example.com', telefono: '654-987-3210', estado: 'Finalizada' },
    { nit: 9, nombre: 'Harvey Roxie', direccion: 'Pentos', correo: 'harvey@example.com', telefono: '321-123-9876', estado: 'Activa' },
  ]);

  const handleDelete = (nit) => {
    setData(data.filter((item) => item.nit !== nit));
  };

  const columns = [
    { field: 'nit', headerName: 'NIT', width: 100 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'direccion', headerName: 'Dirección', width: 200 },
    { field: 'correo', headerName: 'Correo Electrónico', width: 200 },
    { field: 'telefono', headerName: 'Teléfono', width: 150 },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 150,
      renderCell: (params) => {
        const estado = params.value;
        return (
          <button className={`cellAction ${estado.toLowerCase()}`}>
            {estado}
          </button>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Acciones',
      width: 90,
      renderCell: (params) => (
        <div className="cellDelete">
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.nit)}
          >
            Eliminar
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="empresastable">
      <div className="empresastableTitle">
        Empresas
        <Link to="/empresas/new" className="link">
          Agregar nueva empresa
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.nit}
        hideFooterPagination
      />
    </div>
  );
};

export default Empresastable;



