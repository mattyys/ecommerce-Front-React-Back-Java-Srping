import {invoice} from '../data/invoice';
//esta funcion devuelve un clon de la factura con la suma de de sus productos por la cantidad y valor 

export const getInvoiceTotal = () => {
    let total = 0;

    invoice.items.forEach(item => {
        total += item.price * item.quantity;
        
    });

    return {...invoice, total};
};