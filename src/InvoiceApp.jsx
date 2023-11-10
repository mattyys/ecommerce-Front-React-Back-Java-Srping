//import { getInvoiceServices } from "./services/getInvoiceServices";
import { useEffect, useState } from "react";
import { ClientView } from "./components/invoice/ClienView";
import { CompanyView } from "./components/invoice/CompanyView";
import { InvoiceView } from "./components/invoice/InvoiceView";
import { ItemListView } from "./components/invoice/ItemListView";
import { TotalView } from "./components/invoice/TotalView";
import { getInvoiceTotal, calculateTotalInvoice } from "./services/getInvoiceTotal";
import { InvoiceItemsView } from "./components/InvoiceItemsView/InvoiceItemsView";

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
  
  const [activeForm, setActiveForm] = useState(false);
  
  const [invoice, setInvoice] = useState(initialInvoice);
    
  const [items, setItems] = useState([]);
  
  const [counter, setCounter] = useState(4);
  
  const [totalPrice, setTotalPrice] = useState(0);
  
  const {client, company} = invoice;
  
  useEffect(() => {
    const invoiceData = getInvoiceTotal();
    console.log(invoiceData);
    setInvoice(invoiceData);
    setItems(invoiceData.items);
  },[]);


  useEffect(() => {
    setTotalPrice(calculateTotalInvoice(items));
  }, [items]);
 
  
  const handlerAddInvoiceItem = ({product, price, quantity}) => {
    {
       //con el operador spread ... se asignan los valores a item
      setItems([...items, {
        id:counter,
        product: product, 
        price: parseFloat(price), 
        quantity: parseInt(quantity, 10)
      }]);

      setCounter(counter + 1);
    }
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

  const handlerDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
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
       
            <ItemListView title="Productos de la Factura" items={items} 
            handlerDeleteItem={id => handlerDeleteItem(id)}/>
       
            <TotalView total= {totalPrice}/>
            <button className="btn btn-secondary" onClick={onActiveForm}>
              {!activeForm ? 'Agregar Item' : 'Ocultar'}</button>
              {!activeForm ? '':<InvoiceItemsView  handler={ (newItem) => handlerAddInvoiceItem(newItem)}/>}

          </div>
       
        </div>
     
      </div>
    </>
  );
};
