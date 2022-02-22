// import axios from "axios";
import React, { useEffect, useRef } from "react";
import styles from "./ending_style.module.css";
import { useNavigate } from "react-router-dom";

function Ending({ name, url, setStage, stage }) {
  let history = useNavigate();
  const goHoem = () => {
    history("/");
  };
  const success = useRef();
  useEffect(() => {
    success.current.style.transform = "scale(1) translateX(-40px) rotate(0deg)";
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
        <h1 className={styles.comment}>
          우리
          <br />
          갱상도 아이가~
        </h1>
        <img
          className={styles.endingLogo}
          src="image/ending-logo.png"
          alt="endingLogo"
        />
        <p className={styles.text}>경상도 네이티브로 인정받은 당신!</p>
        <p className={styles.text2}>현재까지 2명의 갱상도 친구들이 있습니다.</p>
        <button className={styles.button} onClick={clip}>
          친구들에게 공유하기
        </button>
        <button className={styles.button2} onClick={goHoem}>
          다시 처음으로
        </button>
      </section>
      <img
        className={styles.success}
        src="image/success.png"
        alt="endingLogo"
        ref={success}
      />
    </div>
  );
}

export default Ending;
