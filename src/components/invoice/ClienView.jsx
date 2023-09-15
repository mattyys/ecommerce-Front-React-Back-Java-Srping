export const ClientView = ({client}) =>{
    return(
        <>
        <h3>Datos del Cliente</h3>
                <ul className="list-group">
                  <li className="list-group-item active">
                    {client.name} {client.lastNAme}
                  </li>
                  <li className="list-group-item">
                    {client.address.city} / {client.address.country}
                  </li>
                </ul>
      
        </>
    )
};