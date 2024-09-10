import { Button } from "@mui/material"
import { DomainResponse } from "../model/response"
import { useEffect, useState } from "react"
import {
    DataGrid,
    GridColDef,
    GridColumnHeaderParams,
} from "@mui/x-data-grid"
import { domainService } from "../service/api"

function Example() {
    const [domains, setDomains] = useState<Array<DomainResponse>>()

    useEffect(function () {
        domainService.all().then((response) => setDomains(response.data))
    }, [])

    const columns: Array<GridColDef> = [
        {
            field: "index",
			headerName: "Index",
            flex: 0.1,
            headerClassName: "text-3xl",
            headerAlign: "center",
            minWidth: 100,
            renderHeader: (params: GridColumnHeaderParams) => (
                <strong>
                    {params.colDef.headerName}
                </strong>
            ),
        },
        {
            field: "name",
			headerName: "Name",
            flex: 0.4,
            minWidth: 200,
            renderHeader: (params: GridColumnHeaderParams) => (
                <strong>
                    {params.colDef.headerName}
                </strong>
            ),
        },
        {
            field: "description",
			headerName: "Description",
            minWidth: 300,
            flex: 0.5,
            renderHeader: (params: GridColumnHeaderParams) => (
                <strong>
                    {params.colDef.headerName}
                </strong>
            ),
        },
    ]

    return (
        <>
            {domains ? (
                <DataGrid
                    sx={{
                        border: 2,
                    }}
                    rows={domains}
                    columns={columns}
                    style={{ margin: 10 }}
                />
            ) : (
                <></>
            )}
            <Button className="text-3xl font-bold">Botón</Button>
        </>
    )
}
export default Example
