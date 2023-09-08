import { getInvoiceServices } from "../../services/getInvoiceServices";


export const InvoiceApp = () => {
    const invoice = getInvoiceServices();
    return (
        <>
            <h1>Ejemplo factura</h1>
            <ul>
                <li>Id: {invoice.id}</li>
                <li>Name: {invoice.name}</li>
            </ul>

            <h3>DAtos del Cliente</h3>
            <ul>
                <li>{invoice.client.name}</li>
                <li>{invoice.client.lastNAme}</li>
                <li>{invoice.client.address.country}</li>
            </ul>
        </>
    )
};