
const UsersItem = ({ item, onDelete, onEdit }) => {
  return (
    <tr>
      <td>
        <img src={item.avatar} alt={item.name} width="40" />
        <p>{item.name}</p>
        <p>{item.email}</p>
      </td>

      <td>{item.city}</td>

      <td>{item.status ? "Active" : "Inactive"}</td>

      <td>{item.phone}</td>

      <td>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UsersItem;
