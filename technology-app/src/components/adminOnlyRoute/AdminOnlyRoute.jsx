import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectEmail, selectRole } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  const userRole = useSelector(selectRole);
  const navigate = useNavigate();

  console.log("user Role: ", userRole);

  if (userEmail === "admin@gmail.com") {
    return children;
  }
  // if (userRole === "Admin") {
  //   return children;
  // }
  return (
    <section style={{ height: "80vh" }}>
      <div className="container">
        <h2>Từ chối truy cập!</h2>
        <p>Trang này chỉ xem được bởi quản trị viên</p>
        <br />
        <Link to="/">
          <button className="--btn">&larr; Trở về trang chủ</button>
        </Link>
      </div>
    </section>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const navigate = useNavigate();
  const userEmail = useSelector(selectEmail);
  const userRole = useSelector(selectRole);

  if (userEmail === "admin@gmail.com") {
    return children;
  }
  // if (userRole === "Admin") {
  //   return children;
  // }
  return null;
};

export default AdminOnlyRoute;
