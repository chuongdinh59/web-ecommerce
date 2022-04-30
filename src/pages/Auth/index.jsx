import Helmet from "components/Helmet";
import { Facebook, Github, Google, Loader, Twitter } from "components/Icon";
import SnackBarLogin from "components/SnackBar/Auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react/cjs/react.development";
import { setUserAction } from "redux/actions/user";
import addDocument from "utils/addDocument";
import firebase, { auth } from "../../firebase/config";
import LoginForm from "./LoginForm";
import ResgiterForm from "./ResgiterForm";
import "./style.scss";

const fbProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const provider = [fbProvider, githubProvider, googleProvider, googleProvider];
const Icons = [<Facebook />, <Github />, <Twitter />, <Google />];
function AuthPage(props) {
  const { loading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const containeRef = useRef();
  const dispatch = useDispatch();

  const handleLogin = async (provider) => {
    const { user, additionalUserInfo } = await auth.signInWithPopup(provider);
    const { uid, displayName, photoURL, email } = user;
    dispatch(
      setUserAction({
        name: displayName,
        avatar: photoURL,
        email: email,
        id: uid,
      })
    );
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        uid,
        displayName,
        photoURL,
        email,
      });
    }
    navigate(-1);
  };
  const toggle = () => {
    containeRef?.current?.classList.toggle("sign-in");
    containeRef?.current?.classList.toggle("sign-up");
  };
  useEffect(() => {
    setTimeout(() => {
      containeRef?.current?.classList.add("sign-in");
    }, 200);
  }, []);

  return (
    <>
      <SnackBarLogin />
      <Helmet title="Đăng kí / Đăng nhập">
        {loading && <Loader />}
        <div className="auth">
          <div className="auth-container  " ref={containeRef}>
            <div className="row  grid grid-col-2 grid-col-sm-1">
              <div className="col sign-up">
                <div className="form-wrapper sign-up">
                  <ResgiterForm toggle={toggle} />
                  <div className="auth-social sign-up">
                    <div className="auth-social__item">
                      <Facebook />
                    </div>
                    <div className="auth-social__item">
                      <Github />
                    </div>
                    <div className="auth-social__item">
                      <Twitter />
                    </div>
                    <div className="auth-social__item">
                      <Google />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col sign-in">
                <div className="form-wrapper sign-in">
                  <LoginForm toggle={toggle} />
                  <div className="auth-social sign-in">
                    {/* <div className="auth-social__item">
                    <Facebook />
                  </div>
                  <div className="auth-social__item">
                    <Github />
                  </div>
                  <div className="auth-social__item">
                    <Twitter />
                  </div>
                  <div className="auth-social__item">
                    <Google />
                  </div> */}
                    {Icons.map((i, idx) => {
                      return (
                        <div
                          key={idx}
                          className="auth-social__item pointer"
                          onClick={() => handleLogin(provider[idx])}
                        >
                          {i}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-content grid grid-col-2">
              <div className="col sign-in">
                <div className="auth-text sign-in">
                  <h2 className="heading">Welcome back</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque aut iure praesentium culpa, minima officia
                    eveniet vel nihil, adipisci repellendus blanditiis iusto
                    consectetur voluptatem vitae debitis laudantium eaque
                    deleniti at.
                  </p>
                </div>
                <div className="auth-img sign-in">
                  <img
                    src="./img/undraw_different_love_a3rg.svg"
                    alt="welcome"
                  />
                </div>
              </div>
              <div className="col sign-up">
                <div className="auth-img sign-up">
                  <img
                    src="./img/undraw_creative_team_r90h.svg"
                    alt="welcome"
                  />
                </div>
                <div className="auth-text sign-up">
                  <h2 className="heading">Welcome back</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque aut iure praesentium culpa, minima officia
                    eveniet vel nihil, adipisci repellendus blanditiis iusto
                    consectetur voluptatem vitae debitis laudantium eaque
                    deleniti at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
}

export default AuthPage;
