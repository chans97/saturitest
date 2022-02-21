import React, { useEffect, useRef } from "react";
import styles from "./question_style.module.css";
import { useNavigate } from "react-router-dom";
const tf = require("@tensorflow/tfjs");
const speechCommands = require("@tensorflow-models/speech-commands");

function Question({ name }) {
  const recordBtn = useRef();
  const modalWrap = useRef();
  const modal = useRef();
  const time = useRef();
  const playBtn = useRef();
  const submitBtn = useRef();
  const stopBtn = useRef();
  const stop_icon = useRef();
  const audio = useRef();
  const loading = useRef();
  const playBtn_icon = useRef();
  const ai = useRef();
  let mediaRecorder = null;
  const audioArray = [];
  let second = 0;
  let timer;
  let playFlag = 0;
  let audioCtx;
  useEffect(() => {
    init();
  });

  // Teachable Machine model URL:
  let URL = "https://teachablemachine.withgoogle.com/models/x5ibMK7Za/";
  async function createModel() {
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  }
  async function init() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const labelContainer = ai.current;
    for (let i = 0; i < classLabels.length; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    recognizer.listen(
      (result) => {
        const scores = result.scores; // probability of prediction for each class
        // render the probability scores per class
        console.log("시작");
        for (let i = 0; i < classLabels.length; i++) {
          const classPrediction =
            classLabels[i] + ": " + result.scores[i].toFixed(2);
          labelContainer.childNodes[i].innerHTML = classPrediction;
        }
      },
      {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
      }
    );

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
  }

  function modalShow() {
    modal.current.style.display = "block";
    modalWrap.current.style.display = "block";
  }
  const visualize = (stream) => {
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    const source = audioCtx.createMediaStreamSource(stream);

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    source.connect(analyser);
    setInterval(draw, 40);
    function draw() {
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128.0;
        sum = v - 0.5;
        if (i % 36 === 0) {
          loading.current.children[i / 36].style.transform = `scaleY(${
            sum * 5 - 1.5
          })`;
          loading.current.children[i / 36].style.backgroundColor = `white
          `;
          loading.current.children[i / 36].style.opacity = `${sum * 1} 
          `;
        }
      }
    }
  };
  const recordStart = async () => {
    console.log("녹음시작");
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaRecorder = new MediaRecorder(mediaStream);
      visualize(mediaStream);
      mediaRecorder.ondataavailable = (event) => {
        audioArray.push(event.data);
      };
      mediaRecorder.onstop = (event) => {
        const blob = new Blob(audioArray, { type: "audio/ogg codecs=opus" });
        audioArray.splice(0);
        const blobURL = window.URL.createObjectURL(blob);
        audio.current.src = blobURL;
      };
      mediaRecorder.start();

      timer = setInterval(() => {
        console.log(second);

        ++second;
      }, 1000);
      modalShow();
    } catch (e) {
      alert("마이크 권한이 승인되어있지 않습니다. 승인해주세요.");
    }
  };
  function timeCal(second) {
    let min = Math.floor(second / 60);
    if (min === 0) {
      min = "00";
    } else if (min < 10) {
      min = `0${min}`;
    } else {
      min = min;
    }
    let sec = second % 60 < 10 ? `0${second % 60}` : second % 60;
    time.current.innerText = `${min}:${sec}`;
  }
  function showBtn() {
    playBtn_icon.current.src = "image/play_icon.png";
    playBtn.current.style.display = "block";
    submitBtn.current.style.display = "block";
    stop_icon.current.src = "image/mic_orange_icon.png";
  }
  function timeAndBtnNone() {
    time.current.style.display = "none";
    playBtn.current.style.display = "none";
    submitBtn.current.style.display = "none";
    stop_icon.current.src = "image/stop_icon.png";
  }
  function recordStop() {
    mediaRecorder.stop();
    clearInterval(timer);
    console.log("second: " + second);
    timeCal(second);
    second = 0;
  }
  function showTime() {
    time.current.style.display = "block";
  }
  function stopBtnClick(event) {
    if (stopBtn.current.classList.length === 2) {
      console.log("재녹음시작");
      timeAndBtnNone();
      recordStart();
      stopBtn.current.classList.remove("recordEnd");
      loading.current.style.visibility = "visible";
    } else {
      stopBtn.current.classList.add("recordEnd");
      loading.current.style.visibility = "hidden";
      recordStop();
      showTime();
      showBtn();
    }
  }
  const playClick = () => {
    if (playFlag === 0) {
      audio.current.play();
      playBtn_icon.current.src = "image/pause_icon.png";
      playFlag = 1;
    } else {
      console.log("일시정지 누름");
      audio.current.pause();
      playBtn_icon.current.src = "image/play_icon.png";
      playFlag = 0;
    }
  };

  let history = useNavigate();
  const goNext = () => {
    history("/explain");
  };

  const audioEnd = () => {
    playFlag = 0;
    playBtn_icon.current.src = "image/play_icon.png";
  };

  const closeModal = (e) => {
    if (e.target === modalWrap.current) {
      clearInterval(timer);
      second = 0;
      modal.current.style.display = "none";
      modalWrap.current.style.display = "none";
      timeAndBtnNone();
      loading.current.style.visibility = "visible";
      stopBtn.current.classList.remove("recordEnd");
    }
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
                전학생 <strong className={styles.name_strong}>{name}</strong>
                문제 읽어봐라
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
                </span>
                <span
                  className={`${styles.speechBox_text} ${styles.textsecond}`}
                >
                  <strong id="strong">이에 이승의 이의 이승</strong>
                </span>
              </div>
            </div>
          </section>
          <button
            onClick={recordStart}
            className={styles.recordBtn}
            ref={recordBtn}
          >
            <img
              className={styles.mic_icon}
              src="image/mic_icon.png"
              alt="micIcon"
            />
          </button>
          <div className={styles.record_info}>
            <span>바로 녹음이 시작됩니다.</span>
          </div>
          <div ref={ai} className={styles.aidiv}></div>
          <section
            className={styles.modal_wrap}
            ref={modalWrap}
            onClick={closeModal}
          >
            <div className={styles.modal} ref={modal}>
              <div ref={loading} className={`${styles.loading} ${styles.bar}`}>
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
              <span className={styles.time} ref={time}>
                00:04
              </span>
              <div className={styles.button_wrap}>
                <audio
                  ref={audio}
                  onEnded={audioEnd}
                  preload="metadata"
                ></audio>
                <button
                  className={styles.playBtn}
                  ref={playBtn}
                  onClick={playClick}
                >
                  <img
                    className={styles.playBtn_icon}
                    ref={playBtn_icon}
                    src="image/play_icon.png"
                    alt="playBtn"
                  />
                </button>
                <button
                  className={styles.stopBtn}
                  ref={stopBtn}
                  onClick={stopBtnClick}
                >
                  <img
                    alt="stop"
                    className={styles.stop_icon}
                    ref={stop_icon}
                    src="image/stop_icon.png"
                  />
                </button>
                <button
                  className={styles.submitBtn}
                  ref={submitBtn}
                  type="submit"
                  onClick={goNext}
                >
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
