import Modal from "../shared/Modal";

const AddModal = ({open,addUser,onClose,avatar,setAvatar,name,setName,email,setEmail,city,setCity,phone,setPhone,status,setStatus}) => {
  return (
    <Modal open={open} title="Add User" onResult={addUser} onClose={onClose}>
      <label htmlFor="avatar">Avatar</label>
      <input type="text" id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="city">City</label>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select city</option>
        <option value="Dushanbe">Dushanbe</option>
        <option value="Kulob">Kulob</option>
        <option value="Bokhtar">Bokhtar</option>
        <option value="Khujand">Khujand</option>
        <option value="Hisor">Hisor</option>
      </select>

      <label htmlFor="phone">Phone</label>
      <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <label htmlFor="status">Status</label>
      <select value={String(status)} onChange={(e) => setStatus(e.target.value === "true")}>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    </Modal>
  );
};

export default AddModal;