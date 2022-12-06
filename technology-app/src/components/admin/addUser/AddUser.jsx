import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";
import Card from "../../card/Card";
import Loader from "../../loader/Loader";
import styles from "./AddUser.module.scss";

const roles = [
  { id: 1, name: "Manager" },
  { id: 2, name: "Admin" },
  { id: 3, name: "User" },
];

const initialState = {
  emaillogin: "",
  username: "",
  passwork: "",
  role: "",
};

const AddUser = () => {
  const [user, setUser] = useState(() => {
    const newState = { ...initialState };
    return newState;
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const docRef = addDoc(collection(db, "users"), {
        emaillogin: user.emaillogin,
        username: user.username,
        passwork: user.passwork,
        role: user.role,
      });
      setIsLoading(false);
      setUser({ ...initialState });

      toast.success("User uploaded successfully.");
      navigate("/admin/all-users");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.product}>
        <h2>Thêm Người Dùng</h2>
        <Card cardClass={styles.card}>
          <form onSubmit={addUser}>
            <label>Email Đăng Nhâp:</label>
            <input
              type="email"
              placeholder="Email"
              required
              name="emaillogin"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Tên Người Dùng:</label>
            <input
              type="text"
              placeholder="User Name"
              required
              name="username"
              onChange={(e) => handleInputChange(e)}
            />
            <label>PassWork:</label>
            <input
              type="text"
              placeholder="Passwork"
              required
              name="passwork"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Vai trò</label>
            <select required name="role" onChange={(e) => handleInputChange(e)}>
              <option value="">-- Chọn --</option>
              {roles.map((cat) => {
                return (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
            <button className="--btn --btn-primary">Save User</button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddUser;
