import { getInvoiceServices } from "../../services/getInvoiceServices";
import { ClientView } from "./ClienView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ItemListView } from "./ItemListView";

export const InvoiceApp = () => {
  //se obtiene la factura
  const invoice = getInvoiceServices();
  //se realiza destructuracion de la factura, se extrae cliente
  const { client } = invoice;
  //en crliente se extrae company
  const { company, items } = client;
  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo factura</div>
          <div className="card-body">
            <InvoiceView id={invoice.id} name={invoice.name} />

            <section className="row my-3">
              <div className="col">
                <ClientView client={client} />
              </div>
              <div className="col">
                <CompanyView title="Datos de la empresa" company={company} />
              </div>
            </section>
            <ItemListView title="Productos de la Factura" items={items} />
          </div>
        </div>
      </div>
    </>
  );
};
