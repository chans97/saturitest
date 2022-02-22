import React, { useEffect, useState } from "react";
import styles from "./home_style_mobile.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home({ url }) {
  let history = useNavigate();
  const goExplain = () => {
    history("/explain");
  };
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        const response = await axios.get(url + "api/level/5/?format=json");
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log(response.data);
      } catch (e) {}
    };

    fetchUsers();
  });

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
            <span>테스트 스타뜨!</span>
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
            {users ? (
              users.map((user) => (
                <span className={styles.name} key={user.id}>
                  {user.name}
                </span>
              ))
            ) : (
              <span className={styles.name}>....로딩중입니다....</span>
            )}
            <span></span>
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
