import HelperText from "components/HelperText";
import { Facebook } from "components/Icon";
import { Insta } from "components/Icon";
import { Github } from "components/Icon";
import { Email } from "components/Icon";
import { User } from "components/Icon";
import { Twitter } from "components/Icon";
import { Lock } from "components/Icon";
import React, { useEffect } from "react";
import { useRef } from "react/cjs/react.development";
import "./style.scss";
function AuthPage(props) {
  const containeRef = useRef();

  const toggle = () => {
    containeRef.current.classList.toggle("sign-in");
    containeRef.current.classList.toggle("sign-up");
  };

  useEffect(() => {
    setTimeout(() => {
      containeRef.current.classList.add("sign-in");
    }, 200);
  }, []);
  return (
    <div className="auth">
      <div className="auth-container  " ref={containeRef}>
        <div className="row  grid grid-col-2 grid-col-sm-1">
          <div className="col sign-up">
            <div className="form-wrapper sign-up">
              <form className="auth-form sign-up">
                <HelperText Icon={<User />} placeholder={"Username"} />
                <HelperText
                  Icon={<Lock />}
                  placeholder={"Email"}
                  type="password"
                />
                <HelperText
                  Icon={<Lock />}
                  placeholder={"Password"}
                  type="password"
                />
                <HelperText
                  Icon={<Lock />}
                  placeholder={"Confirm password"}
                  type="password"
                />
                <button className="auth-btn">Sign in</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle}>Sign in here</b>
                </p>
              </form>
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
              <form className="auth-form sign-in">
                <HelperText Icon={<User />} placeholder={"Username"} />
                <HelperText
                  Icon={<Lock />}
                  placeholder={"Password"}
                  type="password"
                />
                <button className="auth-btn">Sign in</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle}>Sign up here</b>
                </p>
              </form>
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
  );
}

export default AuthPage;
