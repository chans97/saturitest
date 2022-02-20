import React from "react";
import styles from "./home_style_mobile.module.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
  let history = useNavigate();
  const goExplain = () => {
    history("/explain");
  };
  return (
    <div>
      <section className={styles.main}>
        <div className={styles.layer}>
          <span className={styles.test_name}>경상도 사투리 말하기 테스트</span>
          <img
            className={styles.title_img}
            src="image/title_logo.png"
            alt="title"
          />
          <img
            className={styles.meme_img}
            src="image/jung.jpg"
            alt="jungjunha"
          />
          <button onClick={goExplain} className={styles.startBtn}>
            <a>테스트 스타뜨!</a>
          </button>
          <span className={styles.infoText}>
            <span className={styles.total}>2022</span>명 중{" "}
            <span className={styles.survivor}>2</span>
            명이 살아남았습니다.
          </span>
        </div>
      </section>
      <section className={styles.addInfo}>
        <div className={styles.names_wrap}>
          <div className={styles.names_title}>
            <img
              className={styles.namesDecoration}
              src="image/main-ranking-left.png"
              alt="namesLeftDecoration"
            />
            <h4 className={styles.names_text}>명예의 전당</h4>
            <img
              className={styles.namesDecoration}
              src="image/main-ranking-right.png"
              alt="namesRightDecoration"
            />
          </div>
          <div className={styles.names_content}>
            <span className={styles.name}>박명수하하</span>
            <span className={styles.name}>호</span>
            <span className={styles.name}>랄랄랄</span>
            <span className={styles.name}>박명수하하호</span>
            <span className={styles.name}>박명수하하호</span>
            <span className={styles.name}>박명수하하호</span>
            <span className={styles.name}>박명수하하호</span>
            <span className={styles.name}>후</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수하하하</span>
            <span className={styles.name}>박</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수하하</span>
            <span className={styles.name}>호</span>
            <span className={styles.name}>라라라</span>
            <span className={styles.name}>박명수하하호</span>
            <span className={styles.name}>호</span>
            <span className={styles.name}>랄랄랄</span>
            <span className={styles.name}>박명수하하호</span>
            <span className={styles.name}>하</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
            <span className={styles.name}>박명수</span>
          </div>
          <hr />
        </div>
        <h4 className={styles.share}>테스트 공유하기</h4>
        <div className={styles.logo_wrap}>
          <button className={`${styles.logoBtn} ${styles.face}`}>
            <img
              className={styles.facebookLogo}
              src="image/f-logo.png"
              alt="facebookLogo"
            />
          </button>
          <button className={`${styles.logoBtn} ${styles.twitt}`}>
            <img
              className={styles.twitterLogo}
              src="image/twitter-logo.png"
              alt="twitterLogo"
            />
          </button>
          <button className={`${styles.logoBtn} ${StyleSheetList.insta}`}>
            <img
              className={styles.instagramLogo}
              src="image/instagram-logo.png"
              alt="instagramLogo"
            />
          </button>
        </div>
      </section>
      <footer className={styles.footer}>
        <p className={styles.besider}>Likelion BEsider</p>
        <div className={styles.footer_box}></div>
      </footer>
    </div>
  );
}

export default Home;
