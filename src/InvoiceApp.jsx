//import { getInvoiceServices } from "./services/getInvoiceServices";
import { ClientView } from "./components/invoice/ClienView";
import { CompanyView } from "./components/invoice/CompanyView";
import { InvoiceView } from "./components/invoice/InvoiceView";
import { ItemListView } from "./components/invoice/ItemListView";
import { TotalView } from "./components/invoice/TotalView";
import { getInvoiceTotal } from "./services/getInvoiceTotal";

export const InvoiceApp = () => {
  //se obtiene la factura
  const invoice = getInvoiceTotal();
  //se realiza destructuracion de la factura, se extrae cliente
  const { total, client, company, items } = invoice;
  //en crliente se extrae company
 

    return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo factura</div>
          <div className="card-body">
            <InvoiceView id={invoice.id} name={invoice.name} />

            <section className="row my-3">
              <div className="col">
                <ClientView title="Cliente" client={client} />
              </div>
              <div className="col">
                <CompanyView title="Datos de la empresa" company={company} />
              </div>
            </section>
            <ItemListView title="Productos de la Factura" items={items} />
            <TotalView total={total}/>
          </div>
        </div>
      </div>
    </>
  );
};
