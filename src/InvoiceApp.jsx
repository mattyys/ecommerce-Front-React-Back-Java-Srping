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

  //se inicializa a partir de el ultimo numero que se tenga en la factura
  const [counter, setCounter] = useState(4);

  const onProductChange = (event) => {
    console.log(event.target.value);
    setProductValue(event.target.value);
  };
  //en esta funcion se desetructura el event
  const onPriceChange = ({target}) => {
    console.log(target.value);
    setPriceValue(target.value);
  };

  const onQuantityChange = ({target}) => {
    console.log(target.value);
    setQuantityValue(target.value);
  };
  const onInvoiceItemSubmit = (event) => {
    {
      event.preventDefault();

      if(productValue.trim().length <= 1) return;
      if(priceValue.trim().length <= 1) return;
      if(quantityValue.trim().length < 1) return;

      setItems([...items, {
        id:counter,
        product: productValue.trim, 
        price: parseFloat(priceValue), 
        quantity: parseInt(quantityValue, 10)
      }]);
      setProductValue('');
      setPriceValue('');
      setQuantityValue('');
      setCounter(counter + 1);
    }
  };

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

            <form className="w-50" onSubmit={event => onInvoiceItemSubmit(event)}>
       
              <input
                className="form-control m-3"
                type="text"
                name="product"
                value={productValue}
                placeholder="Product name"
                onChange={(event) => onProductChange(event)}
              />
       
              <input
                className="form-control m-3"
                type="number"
                name="price"
                value={priceValue}
                placeholder="Price"
                onChange={// se simplifica poruqe al recibir y devolver el mismo evento esta implicito
                  onPriceChange}
              />
           
              <input
                className="form-control m-3"
                type="number"
                name="quantity"
                value={quantityValue}
                placeholder="Quantity"
                onChange={onQuantityChange}
              />
           
              <button 
                type="submit" 
                className="btn btn-primary m-3"
              >Crear Item</button>
           
            </form>
         
          </div>
       
        </div>
     
      </div>
    </>
  );
};
