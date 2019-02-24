import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <div className="flex-row">
                <button
                  className="button btn-row muted-button"
                  onClick={() => props.editMode(user)}
                >
                  Edit
                </button>
                <button
                  className="button btn-row muted-button"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
