//componente principal
import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetail } from './components/UserDetail';
import { Book } from './components/Book';


//funcion flecha
export const HelloWorldApp = (props) =>{

  return (
    <>
      <Title title={props.title} />
      <UserDetail user={props.user} id={props.id} />
      <Book book={props.book}/>
    </>
  );
}


HelloWorldApp.propTypes = {
  
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object,
    book: PropTypes.string.isRequired,
}

//para pasar porps de mnanera default
HelloWorldApp.defaultProps ={
    title: 'Hello World-por defecto',
    id:11122,
    user:{name: 'Jhon', lastName:'Doe'},
    book:'100 años de soledad',
}