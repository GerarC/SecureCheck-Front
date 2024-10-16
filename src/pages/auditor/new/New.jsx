import { Button, TextField } from "@mui/material";
import "./new.scss";
import localStorageService from "../../../services/local-storage";
import { LOCAL_STORAGE_USER_KEY } from "../../../utils/constants/local-storage-constants";
import companyService from "../../../services/api/company-service";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const New = () => {
    const redirect = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const user = localStorageService.getItem(LOCAL_STORAGE_USER_KEY);
        const formElements = event.target.elements;
        const newCompany = {
            nit: formElements.nit.value,
            name: formElements.name.value,
            email: formElements.email.value,
            phone: formElements.phone.value,
            address: formElements.address.value,
            userId: user.id,
        };
        companyService.create(newCompany).then((response) => {
            if (response.ok) redirect("/auditor/empresas");
            else
                response.json().then((exception) => {
                    enqueueSnackbar(exception.message, { variant: "error" });
                    if (exception.errors)
                        exception.errors.forEach((error) =>
                            enqueueSnackbar(error, { variant: "warning" }),
                        );
                });
        });
    }

    return (
        <div className="new">
            <div className="newContainer">
                <div className="top">
                    <h1>Agregar nueva empresa</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <TextField id="name" className="formInput" label="Nombre" />
                            <TextField id="nit" className="formInput" label="Nit" />
                            <TextField id="address" className="formInput" label="Dirección" />
                            <TextField
                                id="email"
                                className="formInput"
                                label="Correo de contacto"
                            />
                            <TextField
                                id="phone"
                                className="formInput"
                                label="Teléfono de contacto"
                            />
                            <Button type="submit">Guardar empresa</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
