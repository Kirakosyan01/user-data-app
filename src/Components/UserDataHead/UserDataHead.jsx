import './UserDataHead.css';

export const UserDataHead = ({handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="number" name="age" placeholder="Age" min={18} max={120} required />
        <input type="text" name="status" placeholder="Status" required />
        <button>Add</button>
      </form>
    </div>
  );
};
