import { invoice } from "../data/invoice";
//esta funcion devuelve un clon de la factura con la suma de de sus productos por la cantidad y valor

export const getInvoiceTotal = () => {
  /*     let total = 0;

    invoice.items.forEach(item => {
        total += item.price * item.quantity;
        
    });
    // con el operador spread se cloan la factura y se agrega el total obtenido
    return {...invoice, total}; */



  //se utiliza reduce, con la funcion map se saca la cantidad por el precio de cada item
  //con la funcion reduce se utiliza un acumulador el cual va sumando el valor de cada iteracion
  //en ultimo lugar ,0 es cuando se inicializa el acumulador
//se aplica programacion funcional
  const total = invoice.items
    .map((item) => item.price * item.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // con el operador spread se cloan la factura y se agrega el total obtenido
  return { ...invoice, total };
};
