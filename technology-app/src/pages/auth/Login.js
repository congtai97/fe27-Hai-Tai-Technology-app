import { useState } from "react";
import styles from "./auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectPreviousURL } from "../../redux/slice/cartSlice";
import { selectEmail } from "../../redux/slice/authSlice";
import { collection, doc, onSnapshot, orderBy } from "firebase/firestore";
import useFetchUser from "../../customHooks/useFetchUser";
import testFetchUser from "../../customHooks/useFetchCollections";
import useFetchCollections from "../../customHooks/useFetchCollections";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useFetchUser("users");

  // const user = collection(db, "users")


  console.log("data ", data);

  const previousURL = useSelector(selectPreviousURL);
  const userEmail = useSelector(selectEmail);

  console.log("User Email ", userEmail);
  const navigate = useNavigate();

  const redirectUser = () => {
    if (previousURL.includes("cart")) {
      return navigate("/cart");
    }
    navigate("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        // const docRef = doc(db, "users", user.uid)
        console.log("User ID: ", user.uid);
        // data.map((user, index) => {
        //   if (user.idAuth === user.uid && user.role === "Admin"){
        //     return navigate("/admin/home")
        //   }
        //   else {
        //     redirectUser()
        //   }
        // })
        if(email === "admin@gmail.com"){
          return navigate("/admin/home")
        } else {
          redirectUser();
        }
        toast.success("Đăng nhập thành công.");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Goooglr
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Đăng nhập thành công.");
        redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        {/* <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div> */}

        <Card>
          <div className={styles.form}>
            <h2>Đăng Nhập</h2>

            <form onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Đăng Nhập
              </button>
              <div className={styles.links}>
                <Link to="/reset">Đặt lại mật khẩu</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" /> Đăng Nhập với Google
            </button>
            <span className={styles.register}>
              <p>Bạn không có tài khoản?</p>
              <Link to="/register">Đăng ký</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
