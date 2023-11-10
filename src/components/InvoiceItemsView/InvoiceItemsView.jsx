import { useEffect, useState } from "react";



export const InvoiceItemsView = ({handler}) => {

  const [invoiceItemsState, setInvoiceItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  //desestucturamos los elementos de invoiceItemsState
  const { product, price, quantity } = invoiceItemsState;

  
  
  useEffect(() => {},[price]);
  useEffect(() => {},[invoiceItemsState]);

  const onFormItemChange = ({ target: { name, value } }) => {
    console.log(name);
    console.log(value);
    setInvoiceItemsState({
      ...invoiceItemsState,
      [name]: value,
    });
  };


  const onInvoiceItemSubmit = (event) => {
    {
      event.preventDefault();

      if(product.trim().length <= 1) return;//trim para quitar espacios al inicio y final
      if(price.length < 1) return;
      if(quantity.length < 1) return;

      handler(invoiceItemsState);//se pas al padre los datos del fomulario

      setInvoiceItemsState({
        product:'',
        price:'',
        quantity:''
      })
      
    }
  };




  return (
    <>
      <form
        className="w-50"
        onSubmit={(
          event //la funcion que envia el formulario o factura
        ) => onInvoiceItemSubmit(event)}
      >
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
          onChange={
            // se simplifica poruqe al recibir y devolver el mismo evento esta implicito
            onFormItemChange
          }
        />

        <input
          className="form-control m-3"
          type="number"
          name="quantity"
          value={quantity}
          placeholder="Quantity"
          onChange={onFormItemChange}
        />

        <button type="submit" className="btn btn-primary m-3">
          Crear Item
        </button>
      </form>
    </>
  );
};
