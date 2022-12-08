import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
import { AdminOnlyLink } from "../adminOnlyRoute/AdminOnlyRoute";
import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";
import Search from "../search/Search";
import { FILTER_BY_SEARCH } from "../../redux/slice/filterSlice";
import { selectProducts } from "../../redux/slice/productSlice";
import img from "../../assets/logo-shop3.png";
import { BiSearch } from "react-icons/bi";
import useFetchUser from "../../customHooks/useFetchUser";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  // const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const [search, setSearch] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const { data } = useFetchUser("users");
  console.log("data ", data);

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, []);
  console.log(products);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fixNavbar = () => {
    if (window.scrollY > 0) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixNavbar);

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          // console.log(u1.slice(1));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);
  const HandleSearch = (e) => {
    e.preventDefault();
    dispatch(FILTER_BY_SEARCH({ products, search }));
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Đăng xuất thành công.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const cart = (
    <span className={styles.cart}>
      <NavLink to="/cart" className={activeLink}>
        Giỏ Hàng
        <FaShoppingCart size={20} />
        <p>{cartTotalQuantity}</p>
      </NavLink>
    </span>
  );

  return (
    <>
      <header className={scrollPage ? `${styles.fixed}` : null}>
        <div className={styles.header}>
          <Link to="/">
            <img src={img} style={{ width: 220, height: 60 }} />
          </Link>
          {/* {logo} */}
          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
          >
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                <Link to="/">
                  <img src={img} style={{ width: 220, height: 60 }} />
                </Link>
                <div className={styles["logo-mobile-icon"]}>
                  <FaTimes size={22} color="#fff" onClick={hideMenu} />
                </div>
              </li>
              <ul className={styles["header-center"]}>
                <li className={styles.search}>
                  <Search
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="--btn"
                    onClick={HandleSearch}
                  >
                    <BiSearch size={18} className={styles.icon} />
                    Tìm kiếm
                  </button>
                </li>
                <ul>
                  {/* <li>
                    <AdminOnlyLink>
                      <Link to="/admin/home">
                        <button
                          style={{ background: "orangered" }}
                          className="--btn --btn-primary"
                        >
                          Admin
                        </button>
                      </Link>
                    </AdminOnlyLink>
                  </li> */}
                  <li>
                    <NavLink to="/" className={activeLink}>
                      Trang Chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={activeLink}>
                      Giới Thiệu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={activeLink}>
                      Liên Hệ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/product" className={activeLink}>
                      Sản Phẩm
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <ShowOnLogout>
                  <div className={styles.onlogout}>
                    <NavLink to="/login" className={activeLink}>
                      Đăng Nhập
                    </NavLink>

                    <NavLink to="/register" className={activeLink}>
                      Đăng Ký
                    </NavLink>
                  </div>
                </ShowOnLogout>
                <ShowOnLogin>
                  <div className={styles.onlogin}>
                    <a href="#home" style={{ color: "aqua" }}>
                      <FaUserCircle size={16} />
                      Hi, {displayName}
                    </a>
                    <NavLink to="/order-history" className={activeLink}>
                      Đơn Hàng
                    </NavLink>
                    <NavLink to="/" onClick={logoutUser}>
                      Đăng Xuất
                    </NavLink>
                  </div>
                </ShowOnLogin>
              </span>
              {cart}
            </div>
          </nav>

          <div className={styles["menu-icon"]}>
            {cart}
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
