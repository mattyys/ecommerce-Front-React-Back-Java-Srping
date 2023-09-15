import { getInvoiceServices } from "../../services/getInvoiceServices";

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
            <ul className="list-group">
              <li className="list-group-item">Id: {invoice.id}</li>
              <li className="list-group-item">Name: {invoice.name}</li>
            </ul>
            <section className="row my-3">
              <div className="col">
                <h3>Datos del Cliente</h3>
                <ul className="list-group">
                  <li className="list-group-item active">
                    {client.name} {client.lastNAme}
                  </li>
                  <li className="list-group-item">
                    {client.address.city} / {client.address.country}
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Datos de la Empresa</h3>
                <ul className="list-group">
                  <li className="list-group-item active">
                    {company.fisicalNumber}
                  </li>
                  <li className="list-group-item">{company.name}</li>
                </ul>
              </div>
            </section>

            <h4>Productos de la factura</h4>

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>

              <tbody>
                {
                  //tambien se puede setructurar item en ({product, price,quantity})
                  items.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.product}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
