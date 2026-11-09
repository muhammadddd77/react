import Modal from "../shared/Modal";

const EditModal = ({  openEdit,  setOpenEdit,editUser,avatarEdit,setAvatarEdit,nameEdit,setNameEdit,emailEdit,setEmailEdit,cityEdit,setCityEdit,phoneEdit,setPhoneEdit,statusEdit,setStatusEdit,
}) => {
  return (
    <Modal
      open={openEdit}
      title="Edit User"
      onResult={editUser}
      onClose={() => setOpenEdit(false)}
    >
      <label htmlFor="avatarEdit">Avatar</label>
      <input
        type="text"
        id="avatarEdit"
        value={avatarEdit}
        onChange={(e) => setAvatarEdit(e.target.value)}
      />

      <label htmlFor="nameEdit">Name</label>
      <input
        type="text"
        id="nameEdit"
        value={nameEdit}
        onChange={(e) => setNameEdit(e.target.value)}
      />

      <label htmlFor="emailEdit">Email</label>
      <input
        type="email"
        id="emailEdit"
        value={emailEdit}
        onChange={(e) => setEmailEdit(e.target.value)}
      />

      <label htmlFor="cityEdit">City</label>
      <select
        id="cityEdit"
        value={cityEdit}
        onChange={(e) => setCityEdit(e.target.value)}
      >
        <option value="Dushanbe">Dushanbe</option>
        <option value="Kulob">Kulob</option>
        <option value="Bokhtar">Bokhtar</option>
        <option value="Khujand">Khujand</option>
        <option value="Hisor">Hisor</option>
      </select>

      <label htmlFor="phoneEdit">Phone</label>
      <input
        type="text"
        id="phoneEdit"
        value={phoneEdit}
        onChange={(e) => setPhoneEdit(e.target.value)}
      />

      <label htmlFor="statusEdit">Status</label>
      <select
        id="statusEdit"
        value={String(statusEdit)}
        onChange={(e) => setStatusEdit(e.target.value === "true")}
      >
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    </Modal>
  );
};
export default EditModal;