import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelloWorldApp} from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp
     title='Hola App'
     user={{name:'matias', lastNAme:'alves'}}
     id = {2}
     book='Ojos de Fuego'
     />
  </React.StrictMode>,
)
