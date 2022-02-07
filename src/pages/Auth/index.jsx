import Helmet from "components/Helmet";
import { Loader } from "components/Icon";
import { Facebook, Github, Insta, Twitter } from "components/Icon";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react/cjs/react.development";
import LoginForm from "./LoginForm";
import ResgiterForm from "./ResgiterForm";
import "./style.scss";
function AuthPage(props) {
  const { loading, login } = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log("Auth Page");
  const containeRef = useRef();
  const toggle = () => {
    containeRef?.current?.classList.toggle("sign-in");
    containeRef?.current?.classList.toggle("sign-up");
    console.log("in toggle function ");
  };
  useEffect(() => {
    setTimeout(() => {
      containeRef?.current?.classList.add("sign-in");
    }, 200);
  }, []);
  useEffect(() => {
    if (login) {
      navigate("/");
      return;
    }
  }, [login]);
  return (
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
                    <Insta />
                  </div>
                </div>
              </div>
            </div>
            <div className="col sign-in">
              <div className="form-wrapper sign-in">
                <LoginForm toggle={toggle} />
                <div className="auth-social sign-in">
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
                    <Insta />
                  </div>
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
                  Doloremque aut iure praesentium culpa, minima officia eveniet
                  vel nihil, adipisci repellendus blanditiis iusto consectetur
                  voluptatem vitae debitis laudantium eaque deleniti at.
                </p>
              </div>
              <div className="auth-img sign-in">
                <img src="./img/undraw_different_love_a3rg.svg" alt="welcome" />
              </div>
            </div>
            <div className="col sign-up">
              <div className="auth-img sign-up">
                <img src="./img/undraw_creative_team_r90h.svg" alt="welcome" />
              </div>
              <div className="auth-text sign-up">
                <h2 className="heading">Welcome back</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque aut iure praesentium culpa, minima officia eveniet
                  vel nihil, adipisci repellendus blanditiis iusto consectetur
                  voluptatem vitae debitis laudantium eaque deleniti at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default AuthPage;
