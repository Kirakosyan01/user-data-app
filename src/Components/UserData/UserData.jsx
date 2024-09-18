import { useState } from "react"
import { UserDataHead } from "../UserDataHead/UserDataHead";
import { UserDataBody } from "../UserDataBody/UserDataBody";
import './UserData.css';

export const UserData = () => {
    const [users, setUsers] = useState([]);
    const [formShow, setFormShow] = useState(false);
    const [editUser, setEditUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;
        const status = e.target.status.value;
        const ID = new Date().toLocaleString();
        setUsers([...users, {
            id: ID,
            name:name,
            age:age,
            status:status,
            isEditing: false,
        }])
        e.target.reset();
        setFormShow(false)
    }
    const handleDelete = (Id) => {
        const newUsers = users.filter((user) => (user.id !== Id));
        setUsers([...newUsers]);
    }
    const handleFormShow = () => {
        setFormShow(!formShow);
    }
    const handleDeleteAll = () => {
        setUsers([]);
    }
    const handleEdit = (newUser) => {
        const changeUsers = users.filter((user) => user.id !== newUser.id);
        setEditUser(newUser);
        setUsers([...changeUsers, {...newUser, isEditing: true}])
    }
    const handleCancel = (newUser) => {
        const changeUsers = users.filter((user) => user.id !== newUser.id);
        setUsers([...changeUsers, {...newUser, isEditing: false}])
    }
    const handleSave = () => {
        const updatedUsers = users.map((user) => 
            user.id === editUser.id ? { ...editUser, isEditing: false } : user
          );
          setUsers(updatedUsers);
          setEditUser({});
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditUser((prevUser) => ({
            ...prevUser,
            [name]: value,
          }));
    }

    return (
        <div>
            <h1>User Data</h1>
            {formShow ? (<button type="button" onClick={handleFormShow}>Cancel</button>) : <button type="button" onClick={handleFormShow}>Create</button>}
                <button type="button" onClick={handleDeleteAll}>Delete All</button>
            {formShow ? (<UserDataHead handleSubmit={handleSubmit}/>) : null}
            <UserDataBody users={users} handleDelete={handleDelete} handleEdit={handleEdit} handleCancel={handleCancel} handleSave={handleSave} handleChange={handleChange}/>
        </div>
    )
}