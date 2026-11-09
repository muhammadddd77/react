import { useState } from "react";
import TableUsers from "../shared/TableUsers";
import EditModal from "./EditModal";
import AddModal from "./AddModal";

export default function Main() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahimov Abdurahmon",
      email: "abdurahmon@gmail.com",
      city: "Kulob",
      status: true,
      phone: "001010101",
      avatar: "/avatars/user1.jpg",
    },
    {
      id: 2,
      name: "Husenov Hasan",
      email: "hasan1122@gmail.com",
      city: "Dushanbe",
      status: false,
      phone: "001010101",
      avatar: "/avatars/user2.jpg",
    },
    {
      id: 3,
      name: "Rahimov Bilol",
      email: "bilol1122@gmail.com",
      city: "Kulob",
      status: true,
      phone: "001010101",
      avatar: "/avatars/user3.jpg",
    },
    {
      id: 4,
      name: "Nastuloev Muhamadullo",
      email: "muhamad@gmail.com",
      city: "Khujand",
      status: false,
      phone: "001010101",
      avatar: "/avatars/user4.jpg",
    },
    {
      id: 5,
      name: "Rahimov Ahmad",
      email: "ahmd1122@gmail.com",
      city: "Kulob",
      status: true,
      phone: "001010101",
      avatar: "/avatars/user5.jpg",
    },
  ]);

  const [open, setOpen] = useState(false);

  // ADD states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [status, setStatus] = useState(false);

  // EDIT states
  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [cityEdit, setCityEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [avatarEdit, setAvatarEdit] = useState("");
  const [statusEdit, setStatusEdit] = useState(false);

  // DELETE
  const onDelete = (id) => {
    setUsers(users.filter((e) => e.id !== id));
  };

  // CREATE
  const addUser = () => {
    const user = {
      id: Date.now(),
      avatar: avatar,
      name: name,
      email: email,
      city: city,
      status: status,
      phone: phone,
    };

    setUsers([...users, user]);

    setName("");
    setEmail("");
    setCity("");
    setPhone("");
    setAvatar("");
    setStatus(false);

    setOpen(false);
  };

  // OPEN EDIT
  const onEdit = (user) => {
    setEditId(user.id);

    setNameEdit(user.name);
    setEmailEdit(user.email);
    setCityEdit(user.city);
    setPhoneEdit(user.phone);
    setAvatarEdit(user.avatar);
    setStatusEdit(user.status);

    setOpenEdit(true);
  };

  // UPDATE
  const editUser = () => {
    const updatedUser = {
      id: editId,
      name: nameEdit,
      email: emailEdit,
      city: cityEdit,
      phone: phoneEdit,
      avatar: avatarEdit,
      status: statusEdit,
    };

    setUsers(users.map((e) => (e.id === editId ? updatedUser : e)));

    setOpenEdit(false);
    setEditId(null);
  };

  return (
    <div>
      <button onClick={() => setOpen(true)}>+ NEW</button>

      <AddModal open={open} addUser={addUser} onClose={() => setOpen(false)} avatar={avatar} setAvatar={setAvatar} name={name} setName={setName} email={email} setEmail={setEmail} city={city} setCity={setCity} phone={phone} setPhone={setPhone} status={status} setStatus={setStatus}
/>

      <TableUsers users={users} onDelete={onDelete} onEdit={onEdit} />

      <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} editUser={editUser} avatarEdit={avatarEdit} setAvatarEdit={setAvatarEdit} nameEdit={nameEdit} setNameEdit={setNameEdit} emailEdit={emailEdit} setEmailEdit={setEmailEdit} cityEdit={cityEdit} setCityEdit={setCityEdit} phoneEdit={phoneEdit} setPhoneEdit={setPhoneEdit} statusEdit={statusEdit} setStatusEdit={setStatusEdit}
      />
    </div>
  );
}