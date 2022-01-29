import Button from "components/Button";
import React from "react";
import "./style.scss";
function CountDown(props) {
  return (
    <section className="count">
      <img src="./img/mountains.jpg" alt="" />
      <div className="count-content">
        <div className="count-content__notify">
          <p>Get -50% from Summer Colection</p>
          <div className="count-content__notify__number">
            <div className="day item">
              <span className="number">00</span>
              <span>Day</span>
            </div>
            <div className="hour item">
              <span className="number">00</span>
              <span>Hours</span>
            </div>
            <div className="minute item">
              <span className="number">00</span>
              <span>Minutes</span>
            </div>
            <div className="second item">
              <span className="number">00</span>
              <span>Seconds</span>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </section>
  );
}

export default CountDown;
