import React from "react";
import s from "./start.module.css";
import JS from "../../assets/1024px-Unofficial_JavaScript_logo_2.svg.png"
import Authorization from "./Authorization/Authorization";

const Start = () => {
  return (
    <div className={s.BodyGround}>
      <div className={s.TextArea}>
        <p>Назначение сайта</p>
        <p>
          Данный сайт предоставлен всем для бесплатного обучения языку программирования JavaScript.
        </p>
      </div>
      <img src={JS} alt="JavaScript"/>
      <Authorization />
    </div>
  );
};

export default Start;
