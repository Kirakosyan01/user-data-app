import './UserDataBody.css';

export const UserDataBody = ({ users, handleDelete, handleEdit, handleCancel, handleSave, handleChange}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{users.length}</td>
                <td>
                  {user.isEditing ? (
                      <input
                        defaultValue={user.name}
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {user.isEditing ? (
                      <input
                        defaultValue={user.age}
                        type="number"
                        name="age"
                        placeholder="Age"
                        min={18}
                        max={120}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                  ) : (
                    user.age
                  )}
                </td>
                <td>
                  {user.isEditing ? (
                      <input
                        defaultValue={user.status}
                        type="text"
                        name="status"
                        placeholder="Status"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                  ) : (
                    user.status
                  )}
                </td>
                {user.isEditing ? (
                  <td>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => handleCancel(user)}>Cancel</button>
                  </td>
                ) : (
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
