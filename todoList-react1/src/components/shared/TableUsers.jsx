
import UsersItem from "./UserItem";
import "./TableUsers.css";

const TableUsers = ({ users, onDelete, onEdit }) => {
  return (
    <table>
      <Thead />

      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <UsersItem
              key={user.id}
              item={user}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5">Not Found Users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableUsers;

function Thead() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Status</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}
