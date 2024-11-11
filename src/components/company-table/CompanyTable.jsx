import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, useTheme, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function strongHeader(header) {
    return <strong>{header}</strong>;
}

function renderValue(props) {
    const { value } = props;
    return <Typography color="background">{value}</Typography>;
}

const CompanyTable = ({
    rows,
    deleteCompany,
    getCompanyAudits,
    auditCompany,
}) => {
    const [data, setData] = useState(rows);
    const theme = useTheme();

    useEffect(() => {
        setData(rows);
    }, [rows]);

    function handleDelete(nit) {
        const foundCompany = data.find((company) => company.nit === nit);
        deleteCompany(foundCompany.id);
        setData(data.filter((item) => item.nit !== nit));
    }

    function handleAudit(nit) {
        const foundCompany = data.find((company) => company.nit === nit);
        auditCompany(foundCompany.id);
    }

    function handleCompanyAudits(nit) {
        const foundCompany = data.find((company) => company.nit === nit);
        getCompanyAudits(foundCompany.id);
    }

    const columns = [
        {
            field: "nit",
            headerName: strongHeader("NIT"),
            flex: 0.4,
            minWidth: 100,
            renderCell: renderValue,
        },
        {
            field: "name",
            headerName: strongHeader("Nombre"),
            flex: 0.7,
            minWidth: 150,
            renderCell: renderValue,
        },
        {
            field: "address",
            headerName: strongHeader("Dirección"),
            flex: 0.8,
            minWidth: 150,
            renderCell: renderValue,
        },
        {
            field: "contactEmail",
            headerName: strongHeader("Correo Electrónico"),
            flex: 1,
            minWidth: 150,
            renderCell: renderValue,
        },
        {
            field: "contactPhone",
            headerName: strongHeader("Teléfono"),
            flex: 0.5,
            minWidth: 150,
            renderCell: renderValue,
        },
        {
            field: "action",
            headerName: strongHeader("Acciones"),
            flex: 1.2,
            minWidth: 350,
            renderCell: (params) => (
                <Box
                    sx={{ display: "flex", gap: "1rem", paddingX: "1rem", width: "100%" }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleAudit(params.row.nit)}
                        sx={{
                            flexGrow: 1,
                            backgroundColor: theme.palette.success.main,
                            px: theme.spacing(2),
                            color: theme.palette.primary.contrastText,
                            "&:hover": {
                                backgroundColor: theme.palette.success.light,
                            },
                        }}
                    >
                        Auditar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleCompanyAudits(params.row.nit)}
                        sx={{
                            flexGrow: 1,
                            backgroundColor: theme.palette.primary.main,
                            px: theme.spacing(2),
                            color: theme.palette.primary.contrastText,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                            },
                        }}
                    >
                        Ver Auditorías
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(params.row.nit)}
                        sx={{
                            flexGrow: 1,
                            backgroundColor: theme.palette.error.main,
                            px: theme.spacing(2),
                            color: theme.palette.primary.contrastText,
                            "&:hover": {
                                backgroundColor: theme.palette.error.light,
                            },
                        }}
                    >
                        Eliminar
                    </Button>
                </Box>
            ),
        },
    ];

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(4),
                width: "100%",
            }}
        >
            <DataGrid
                sx={{
                    width: "100%",
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        fontWeight: "bold",
                    },
                    "& .MuiDataGrid-cell": {
                        color: theme.palette.primary.main,
                        alignItems: "center",
                        alignContent: "center",
                        justifyItems: "center",
                    },
                    "& .MuiDataGrid-sortIcon": {
                        color: theme.palette.primary.contrastText,
                    },
                    "& .MuiDataGrid-menuIconButton": {
                        color: theme.palette.primary.contrastText,
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

export default CompanyTable;
