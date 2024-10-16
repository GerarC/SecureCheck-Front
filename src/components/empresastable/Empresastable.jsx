import { useEffect, useState } from "react";
import "./empresastable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

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
        { field: "nit", headerName: "NIT", flex: 0.4, minWidth: 100 },
        { field: "name", headerName: "Nombre", flex: 1, minWidth: 150 },
        { field: "address", headerName: "Dirección", flex: 1, minWidth: 150 },
        {
            field: "contactEmail",
            headerName: "Correo Electrónico",
            flex: 1,
            minWidth: 150,
        },
        { field: "contactPhone", headerName: "Teléfono", flex: 0.5, minWidth: 150 },
        {
            field: "action",
            headerName: "Acciones",
            flex: 0.7,
            minWidth: 150,
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
        <Box
            sx={{ flexGrow: 1, display: "flex", width: "100%" }}
            className="empresastable"
        >
            <div className="empresastableTitle">
                Empresas
                <Link to="/auditor/empresas/new" className="link">
                    Agregar nueva empresa
                </Link>
            </div>
            <DataGrid
                sx={{ width: "100%" }}
                rows={data}
                columns={columns}
                getRowId={(row) => row.id}
                hideFooterPagination
            />
        </Box>
    );
};

export default Empresastable;
