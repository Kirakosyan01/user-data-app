import { useState } from "react"
import { UserDataHead } from "../UserDataHead/UserDataHead";
import { UserDataBody } from "../UserDataBody/UserDataBody";
import './UserData.css';

export const UserData = () => {
    const [users, setUsers] = useState([]);
    const [formShow, setFormShow] = useState(false);
    const [editUser, setEditUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;
        const status = e.target.status.value;
        const company = e.target.company.value;
        const email = e.target.email.value;
        const website = e.target.website.value;
        const ID = new Date().toLocaleString();
        setUsers([...users, {
            id: ID,
            name:name,
            age:age,
            status:status,
            company:company,
            email:email,
            website:website,
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
        const editingUser = users.find((user) => user.id === newUser.id)
        setEditUser(editingUser);
        const updatedUsers = users.map((user) => 
            user.id === newUser.id ? { ...user, isEditing: true } : user
        );
        setUsers(updatedUsers);
    }
    const handleCancel = (newUser) => {
        const changeUsers = users.filter((user) => user.id !== newUser.id);
        setUsers([...changeUsers, {...newUser, isEditing: false}]);
        setEditUser(null);
    }
    const handleSave = () => {
        const updatedUsers = users.map((user) => 
            user.id === editUser.id ? { ...editUser, isEditing: false } : user
          );
          setUsers(updatedUsers);
          setEditUser(null);
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditUser((prevUser) => ({
            ...prevUser,
            [name]: value,
          }));
    }

    return (
        <div className="user__data">
            <div className="buttons__div">
            {formShow ? (<button className="cancel__button" type="button" onClick={handleFormShow}>Cancel</button>) : <button className="create__button" type="button" onClick={handleFormShow}>Create</button>}
                <button className="delete_all__button" type="button" onClick={handleDeleteAll}>Delete All</button>
            </div>
            {formShow ? (<UserDataHead handleSubmit={handleSubmit}/>) : null}
            <UserDataBody users={users} handleDelete={handleDelete} handleEdit={handleEdit} handleCancel={handleCancel} handleSave={handleSave} handleChange={handleChange}/>
        </div>
    )
}
