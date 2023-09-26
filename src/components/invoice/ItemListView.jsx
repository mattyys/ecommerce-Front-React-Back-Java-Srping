import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types';

export const ItemListView = ({title, items}) => {
  return (
    <>
      <h4>{title}</h4>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>

        <tbody>
          {
            //tambien se puede setructurar item en ({product, price,quantity})
            items.map((item) => {
              return (
                <RowItemView key={item.id} item={item} />
              );
            })
          }
        </tbody>
      </table>
    </>
  );
};

ItemListView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
