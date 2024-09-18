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
            <th>Company</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{users.indexOf(user) +1 }</td>
                <td>
                  {user.isEditing ? (
                      <input
                        className='edit__input'
                        defaultValue={user.name}
                        type="text"
                        name="name"
                        maxLength={40}
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
                        className='edit__input'
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
                        className='edit__input'
                        maxLength={40}
                        name="status"
                        placeholder="Status"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                  ) : (
                    user.status
                  )}
                </td>
                <td>
                  {user.isEditing ? (
                      <input
                        defaultValue={user.company}
                        type="text"
                        className='edit__input'
                        maxLength={40}
                        name="company"
                        placeholder="Company"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                  ) : (
                    user.company
                  )}
                </td>
                <td>
                  {user.isEditing ? (
                      <input
                        defaultValue={user.email}
                        type="email"
                        className='edit__input'
                        maxLength={40}
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {user.isEditing ? (
                      <input
                        defaultValue={user.website}
                        type="text"
                        maxLength={40}
                        className='edit__input'
                        name="website"
                        placeholder="Website"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                  ) : (
                    user.website
                  )}
                </td>
                {user.isEditing ? (
                  <td className='action__buttons_td'>
                    <button className='action__button' onClick={handleSave}>Save</button>
                    <button className='action__button' onClick={() => handleCancel(user)}>Cancel</button>
                  </td>
                ) : (
                  <td className='action__buttons_td'>
                    <button className='action__button' onClick={() => handleEdit(user)}>Edit</button>
                    <button className='action__button' onClick={() => handleDelete(user.id)}>
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
