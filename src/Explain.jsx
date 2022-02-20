import React from "react";
import styles from "./explain_style_mobile.module.css";

import { useNavigate } from "react-router-dom";

function Explain({ name, setName }) {
  let history = useNavigate();
  const goQuestion = () => {
    if (name) {
      history("/question");
    } else {
      window.alert("이름을 6자 이내로 입력해주세요.");
    }
  };
  const onChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  return (
    <div>
      <section className={styles.main}>
        <div className={styles.layer}>
          <p className={styles.comment}>
            경상도에 전학 온 서울 촌놈인 당신
            <br />
            <strong>서울 촌놈이라는 것을 들키지 마라!</strong>
          </p>
          <section className={styles.warning}>
            <p className={styles.warning_text}>
              진행 도중 서울 촌놈인 걸 들킨다면...
            </p>
            <img
              className={styles.warning_meme}
              src="image/warning_meme.png"
              alt="meme"
            />
            <h3 className={styles.warning_text}>끌고간다.</h3>
          </section>
          <span className={styles.text}>
            이제 친구들에게 당신을 소개하고
            <br />
            갱상도 사람으로 인정받자!
          </span>
          <p className={styles.caution}>※이름은 6자로 제한됩니다※</p>
          <form>
            <input
              onChange={onChange}
              value={name}
              type="text"
              placeholder="클릭하여 이름 적기"
              maxLength="6"
            />
            <button
              onChange={onChange}
              className={styles.submitBtn}
              onClick={goQuestion}
            >
              확인
            </button>
          </form>
          <footer className={styles.footer}>
            <p className={styles.besider}>Likelion BEsider</p>
            <div className={styles.footer_box}></div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default Explain;
