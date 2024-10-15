import { useEffect, useState } from "react";
import "./empresastable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Empresastable = ({ rows, deleteCompany, auditCompany }) => {
    const [data, setData] = useState(rows);

    useEffect(() => {
        setData(rows);
    }, [rows]);

    const handleDelete = (nit) => {
        const foundCompany = data.find((company) => company.nit === nit);
        deleteCompany(foundCompany.id);
        setData(data.filter((item) => item.nit !== nit));
    };
    const handleAudit = (nit) => {
        const foundCompany = data.find((company) => company.nit === nit);
        auditCompany(foundCompany.id);
    };

    const columns = [
        { field: "nit", headerName: "NIT", width: 120 },
        { field: "name", headerName: "Nombre", width: 300 },
        { field: "address", headerName: "Dirección", width: 300 },
        { field: "contactEmail", headerName: "Correo Electrónico", width: 300 },
        { field: "contactPhone", headerName: "Teléfono", width: 150 },
        {
            field: "action",
            headerName: "Acciones",
            width: 200,
            renderCell: (params) => (
                <div className="cell">
                    <Button
                        className="auditButton"
                        onClick={() => handleAudit(params.row.nit)}
                    >
                        Auditar
                    </Button>
                    <Button
                        className="deleteButton"
                        onClick={() => handleDelete(params.row.nit)}
                    >
                        Eliminar
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="empresastable">
            <div className="empresastableTitle">
                Empresas
                <Link to="/auditor/empresas/new" className="link">
                    Agregar nueva empresa
                </Link>
            </div>
            <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row.id}
                hideFooterPagination
            />
        </div>
    );
};

export default Empresastable;
