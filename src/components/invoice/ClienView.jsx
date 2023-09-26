import PropTypes from 'prop-types';

export const ClientView = ({title,client}) =>{
    return(
        <>
        <h3>{title}</h3>
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
ClientView.prototype = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
}