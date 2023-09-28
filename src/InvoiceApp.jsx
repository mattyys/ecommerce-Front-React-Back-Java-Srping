//import { getInvoiceServices } from "./services/getInvoiceServices";
import { useState } from "react";
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
  const { total, client, company, items: initialItems } = invoice;
  //en cliente se extrae company

  const [productValue, setProductValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  const [items, setItems] = useState(initialItems);

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
            <TotalView total={total} />

            <form className="w-50" onSubmit={event =>{
              event.preventDefault();
              setItems([...items, {
                id:4,
                product: productValue, 
                price: +priceValue, 
                quantity: parseInt(quantityValue, 10)
              }]);
              setProductValue('');
              setPriceValue('');
              setQuantityValue('');
            }}>
              <input
                className="form-control m-3"
                type="text"
                name="product"
                value={productValue}
                placeholder="Product name"
                onChange={(event) => {
                  console.log(event.target.value);
                  setProductValue(event.target.value);
                }}
              />
              <input
                className="form-control m-3"
                type="text"
                name="price"
                value={priceValue}
                placeholder="Price"
                onChange={(event) => {
                  console.log(event.target.value);
                  setPriceValue(event.target.value);
                }}
              />
              <input
                className="form-control m-3"
                type="text"
                name="quantity"
                value={quantityValue}
                placeholder="Quantity"
                onChange={(event) => {
                  console.log(event.target.value);
                  setQuantityValue(event.target.value);
                }}
              />
              <button type="submit" className="btn btn-primary">Crear Item</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
