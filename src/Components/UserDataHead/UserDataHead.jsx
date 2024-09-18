import './UserDataHead.css';

export const UserDataHead = ({handleSubmit}) => {
  return (
    <div className='user_data_head'>
      <form onSubmit={handleSubmit}>
        <input maxLength={40} type="text" name="name" placeholder="Name" required />
        <input type="number" name="age" placeholder="Age" min={18} max={120} required />
        <input maxLength={40} type="text" name="status" placeholder="Status" required />
        <input maxLength={40} type='text' name='company' placeholder='Company' required />
        <input maxLength={40} type='email' name='email' placeholder='Email' required />
        <input maxLength={40} type='text' name='website' placeholder='Website' required />
        <button className='add__button'>Add</button>
      </form>
    </div>
  );
};
