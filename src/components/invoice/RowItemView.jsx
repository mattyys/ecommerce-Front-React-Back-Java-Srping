import PropTypes from 'prop-types';

export const RowItemView = ({item}) => {
  return (
    <>
      <tr>
        <td>{item.product}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
      </tr>
    </>
  );
};

RowItemView.propTypes = {
  item: PropTypes.object.isRequired,
};