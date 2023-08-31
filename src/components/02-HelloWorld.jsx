//se puede pasar a travez de las props en la funcion
//tambien se puede pasar props por las llaves
import PropTypes from 'prop-types';
//export function HelloWorld(){} - funcion comun

//funcion flecha
export const HelloWorld = (props) =>{
//export const HelloWorld = ({user, id})  es otra manera de pasar props
    const name = 'matias';

    console.log(props);
    console.log(props.title);
//se pueden pasar variables con las {}
  return (
    <>
      <h1>{props.title}</h1>
      <h4>primer componente {name}</h4>
      <h4>usuario pasado props {props.user.name} id={props.id}</h4>
      <h5>{JSON.stringify(props)}</h5>
    </>
  );
}
//instalamos con npm install prop-types
//se instala y se importa
//se utiliza para validar los datos o tipificar lo que se recibo, como numero string 
//objeto,etc

HelloWorld.propTypes = {
    //si agregamos isRequired siempre se tiene que pasar el valor
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object,
}

//para pasar porps de mnanera default
HelloWorld.defaultProps ={
    title: 'Hello World-por defecto',
    id:11122,
    user:{name: 'Jhon', lastName:'Doe'},
}