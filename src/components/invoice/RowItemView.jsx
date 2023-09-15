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
