import { useEffect, useState } from "react";
import "./empresastable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, useTheme } from "@mui/material";

function strongHeader(header) {
    return <strong>{header}</strong>
}

const Empresastable = ({
    rows,
    deleteCompany,
    auditCompany,
    addButtonFunction,
}) => {
    const [data, setData] = useState(rows);
    const theme = useTheme();

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
        { field: "nit", headerName: strongHeader("NIT"), flex: 0.4, minWidth: 100, },
        { field: "name", headerName: strongHeader("Nombre"), flex: 1, minWidth: 150 },
        { field: "address", headerName: strongHeader("Dirección"), flex: 1, minWidth: 150 },
        {
            field: "contactEmail",
            headerName: strongHeader("Correo Electrónico"),
            flex: 1,
            minWidth: 150,
        },
        { field: "contactPhone", headerName: strongHeader("Teléfono"), flex: 0.5, minWidth: 150 },
        {
            field: "action",
            headerName: strongHeader("Acciones"),
            flex: 0.7,
            minWidth: 150,
            renderCell: (params) => (
                <div className="cell">
                    <Button
                        variant="outlined"
                        sx={{
                            color: theme.palette.success.main,
                            borderColor: theme.palette.success.main,
                            backgroundColor: theme.palette.success.light,
                        }}
                        onClick={() => handleAudit(params.row.nit)}
                    >
                        Auditar
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            color: theme.palette.error.main,
                            borderColor: theme.palette.error.main,
                            backgroundColor: theme.palette.error.light,
                        }}
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
                <Button
                    variant="contained"
                    sx={{
                        color: "white",
                        borderColor: theme.palette.secondary.light,
                        backgroundColor: theme.palette.secondary.main,
                    }}
                    onClick={() => addButtonFunction()}
                >
                    Agregar nueva empresa
                </Button>
            </div>
            <DataGrid
                sx={{
                    width: "100%",
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: theme.palette.background.main,
                        color: theme.palette.primary.light,
                        fontWeight: "bold",
                    },
                }}
                rows={data}
                columns={columns}
                getRowId={(row) => row.id}
                disableRowSelectionOnClick
                hideFooterPagination
            />
        </Box>
    );
};

export default Empresastable;
