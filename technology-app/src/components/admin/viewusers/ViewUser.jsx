import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Notiflix from "notiflix";
import useFetchUser from "../../../customHooks/useFetchUser.js";
import { STORE_USERS } from "../../../redux/slice/userSlice";
import styles from "./ViewUsers.module.scss";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";

const ViewUser = () => {
  const { data, isLoading } = useFetchUser("users");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      STORE_USERS({
        users: data,
      })
    );
  }, [dispatch, data]);
  console.log("User,", data);

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "Xóa người dùng!",
      "Bạn có muốn xóa người dùng này?",
      "Xóa",
      "Đóng",
      function okCb() {
        deleteProduct(id);
      },
      function cancelCb() {
        console.log("Delete Canceled");
      },
      {
        width: "320px",
        borderRadius: "3px",
        titleColor: "orangered",
        okButtonBackground: "orangered",
        cssAnimationStyle: "zoom",
      }
    );
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      toast.success("Xóa người dùng thành công!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    navigate("/admin/add-users/ADD");
  };
  return (
    <>
      <div className={styles.table}>
        <div className="--flex-between">
          <h2>Tất cả người dùng</h2>
          <button onClick={addUser} className="--btn --btn-primary">
            Thêm người dùng
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              const { id, emaillogin, username, role } = user;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{emaillogin}</td>
                  <td>{username}</td>
                  <td>{role}</td>
                  <td className={styles.icons}>
                    &nbsp;
                    <FaTrashAlt
                      size={18}
                      color="red"
                      onClick={() => confirmDelete(id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewUser;
