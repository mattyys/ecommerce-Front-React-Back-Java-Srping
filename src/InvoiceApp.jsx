//import { getInvoiceServices } from "./services/getInvoiceServices";
import { useEffect, useState } from "react";
import { ClientView } from "./components/invoice/ClienView";
import { CompanyView } from "./components/invoice/CompanyView";
import { InvoiceView } from "./components/invoice/InvoiceView";
import { ItemListView } from "./components/invoice/ItemListView";
import { TotalView } from "./components/invoice/TotalView";
import { getInvoiceTotal, calculateTotalInvoice } from "./services/getInvoiceTotal";

const initialInvoice = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastNAme: "",
    address: {
      country: "",
      city: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fisicalNumber: 0,
  },
  items: [],}

export const InvoiceApp = () => {
  
  //const invoice = getInvoiceTotal();
  const [invoice, setInvoice] = useState(initialInvoice);
    
  const [items, setItems] = useState([]);
  
  const [invoiceItemsState, setInvoiceItemsState]= useState({
    product:'',
    price:'',
    quantity:''
  })
  
  //se inicializa a partir de el ultimo numero que se tenga en la factura
  const [counter, setCounter] = useState(4);
  
  const [totalPrice, setTotalPrice] = useState(0);
  
  const {client, company} = invoice;
  
  //desestucturamos los elementos de invoiceItemsState
  const {product, price, quantity} = invoiceItemsState;
  
  useEffect(() => {
    const invoiceData = getInvoiceTotal();
    console.log(invoiceData);
    setInvoice(invoiceData);
    setItems(invoiceData.items);
  },[]);

  useEffect (() => {
      setTotalPrice(calculateTotalInvoice(items));
  },[items])
  

  



  const onFormItemChange = ( { target:{ name, value } }) => {
    console.log(name);
    console.log(value);
    setInvoiceItemsState({
      ...invoiceItemsState,
      [name]:value
    });
  };
 
  
  const onInvoiceItemSubmit = (event) => {
    {
      event.preventDefault();

      if(product.trim().length <= 1) return;//trim para quitar espacios al inicio y final
      if(price.length < 1) return;
      if(quantity.length < 1) return;

      //con el operador spread ... se asignan los valores a item
      setItems([...items, {
        id:counter,
        product: product, 
        price: parseFloat(price), 
        quantity: parseInt(quantity, 10)
      }]);
      setInvoiceItemsState({
        product:'',
        price:'',
        quantity:''
      })
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
       
            <TotalView total= {totalPrice}/>

            <form className="w-50" onSubmit={event =>//la funcion que envia el formulario o factura
               onInvoiceItemSubmit(event)}>
       
              <input
                className="form-control m-3"
                type="text"
                name="product"
                value={product}
                placeholder="Product name"
                onChange={(event) => onFormItemChange(event)}
              />
       
              <input
                className="form-control m-3"
                type="number"
                name="price"
                value={price}
                placeholder="Price"
                onChange={// se simplifica poruqe al recibir y devolver el mismo evento esta implicito
                  onFormItemChange}
              />
           
              <input
                className="form-control m-3"
                type="number"
                name="quantity"
                value={quantity}
                placeholder="Quantity"
                onChange={onFormItemChange}
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
