import React, { useEffect, useRef } from "react";
import styles from "./gameover_style.module.css";

import { useNavigate } from "react-router-dom";

function Gameover({ name, stage }) {
  let history = useNavigate();
  const goExplain = () => {
    history("/explain");
  };
  const fail = useRef();
  useEffect(() => {
    fail.current.style.transform = "scale(1) translateX(-40px) rotate(0deg)";
  });
  const clip = () => {
    var tempElem = document.createElement("textarea");
    tempElem.value = "http://localhost:3000/";
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    alert("주소가 클립보드에 복사되었습니다. 친구들과 함께 해봐요!");
  };
  return (
    <div>
      <section className={styles.main}>
        <h1 className={styles.comment}>끌고가라.</h1>
        <img
          className={styles.cat_meme}
          src="image/cat_meme.png"
          alt="catMeme"
        />
        <p className={styles.text}>서울 촌놈이라는 것을 들킨 {name}!</p>
        <p className={styles.text2}>
          현재까지 2000명의 도전자 중 200명이 {stage}단계를 통과하였습니다.
        </p>
        <button className={styles.button} onClick={goExplain}>
          재도전하기
        </button>
        <button className={styles.button2} onClick={clip}>
          친구들에게 공유하기
        </button>
      </section>
      <img
        className={styles.fail}
        src="image/fail.png"
        alt="endingLogo"
        ref={fail}
      />
    </div>
  );
}

export default Gameover;
