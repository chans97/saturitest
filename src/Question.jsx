import React from "react";
import styles from "./question_style.module.css";
import { useNavigate } from "react-router-dom";

function Question(props) {
  let history = useNavigate();
  const goExplain = () => {
    history("/explain");
  };
  return (
    <div>
      <section className={styles.main}>
        <div className={styles.layer}>
          <ul>
            <li className={styles.nowStep}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h4 className={styles.info}>
            첫날 솩쌤이 칠판에 적힌 문제를
            <br />
            읽어보라고 한다
          </h4>
          <section className={styles.questionContainer}>
            <div className={styles.questionTri}></div>
            <div className={styles.questionBox}>
              <span className={`${styles.questiohBox_text} ${styles.text}`}>
                전학생 박명수 문제 읽어봐라
              </span>
              <img
                className={styles.meme}
                src="image/meme_question1.jpg"
                alt="meme"
              />
            </div>
          </section>
          <section className={styles.speechContainer}>
            <div className={styles.speechTri}></div>
            <div className={styles.speechBox}>
              <div className={styles.text_box}>
                <span className={`${styles.speechBox_text} ${styles.text}`}>
                  녹음 버튼을 눌러 다음의 말을 녹음하시오
                  <br />
                  <strong id="strong">이에 이승의 이의 이승</strong>
                </span>
              </div>
            </div>
          </section>
          <button className={styles.recordBtn}>
            <img
              className={styles.mic_icon}
              src="image/mic_icon.png"
              alt="micIcon"
            />
          </button>
          <section className={styles.modal_wrap}>
            <div className={styles.modal}>
              <div className={`${styles.loading} ${styles.bar}`}>
                <div></div>
                <div></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
                <div id="dif"></div>
                <div></div>
              </div>
              <span className={styles.time}>00:04</span>
              <div className={styles.button_wrap}>
                <audio preload="metadata"></audio>
                <button className={styles.playBtn}>
                  <img
                    className={styles.playBtn_icon}
                    src="image/play_icon.png"
                    alt="playBtn"
                  />
                </button>
                <button className={styles.stopBtn}>
                  <img className={styles.stop_icon} src="image/stop_icon.png" />
                </button>
                <button className={styles.submitBtn} type="submit">
                  확인
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Question;
