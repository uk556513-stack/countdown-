import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Check } from 'lucide-react';
import './App.css';

export default function App() {
  const TOTAL_TIME = 10;

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isRunning, setIsRunning] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && !isFinished) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            setTimeout(() => {
              setIsFinished(true);
              setIsRunning(false);
            }, 1000);

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isFinished]);


  const toggleTimer = () => {
    if (isFinished) return;

    setIsRunning(!isRunning);
  };


  const resetTimer = () => {
    setIsFinished(false);
    setIsRunning(true);
    setTimeLeft(TOTAL_TIME);
  };


  const mainRadius = 82;

  const mainCircumference =
    2 * Math.PI * mainRadius;


  return (
    <div className="main-wrapper">

      <div className="cyber-card">

        <AnimatePresence mode="wait">

          {!isFinished ? (

            <motion.div
              key="countdown-state"

              initial={{
                opacity: 0,
                scale: 0.95
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              exit={{
                opacity: 0,
                scale: 0.95
              }}

              transition={{
                duration: 0.3
              }}

              className="card-content"
            >

              <div className="title-header">

                <h1 className="title-main">

                  LOADER{' '}

                  <span className="title-pink">
                    COUNTDOWN
                  </span>

                </h1>


                <p className="title-sub">
                  NEURAL TIMER SUBSYSTEM
                </p>

              </div>


              <div className="loader-stage">

                <svg
                  className="loader-svg"
                  viewBox="0 0 240 240"
                >

                  <defs>

                    <linearGradient
                      id="loaderGradient"

                      x1="20%"
                      y1="100%"
                      x2="85%"
                      y2="0%"
                    >

                      <stop
                        offset="0%"
                        stopColor="#22d3ee"
                      />

                      <stop
                        offset="28%"
                        stopColor="#38bdf8"
                      />

                      <stop
                        offset="52%"
                        stopColor="#6366f1"
                      />

                      <stop
                        offset="72%"
                        stopColor="#a855f7"
                      />

                      <stop
                        offset="100%"
                        stopColor="#f9a8d4"
                      />

                    </linearGradient>

                    <linearGradient
                      id="outerLoaderGradient"

                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >

                      <stop
                        offset="0%"
                        stopColor="#22d3ee"
                      />

                      <stop
                        offset="50%"
                        stopColor="#8b5cf6"
                      />

                      <stop
                        offset="100%"
                        stopColor="#ec4899"
                      />

                    </linearGradient>


                    <filter
                      id="loaderGlow"

                      x="-80%"
                      y="-80%"
                      width="260%"
                      height="260%"
                    >

                      <feGaussianBlur
                        stdDeviation="4"
                        result="blur"
                      />

                      <feMerge>

                        <feMergeNode in="blur" />

                        <feMergeNode in="SourceGraphic" />

                      </feMerge>

                    </filter>

                    <filter
                      id="strongLoaderGlow"

                      x="-100%"
                      y="-100%"
                      width="300%"
                      height="300%"
                    >

                      <feGaussianBlur
                        stdDeviation="7"
                        result="blur"
                      />

                      <feMerge>

                        <feMergeNode in="blur" />

                        <feMergeNode in="SourceGraphic" />

                      </feMerge>

                    </filter>

                  </defs>

                  <circle
                    cx="120"
                    cy="120"
                    r="101"
                    className="outer-thin-circle"
                  />


                  <circle
                    cx="120"
                    cy="120"
                    r="101"

                    className="outer-top-arc"

                    strokeDasharray="170 470"
                  />

                  <circle
                    cx="120"
                    cy="120"
                    r="101"

                    className="outer-bottom-arc"

                    strokeDasharray="75 565"

                    strokeDashoffset="35"
                  />


                  <circle
                    cx="120"
                    cy="120"
                    r={mainRadius}

                    className="main-track"
                  />


                  <circle
                    cx="120"
                    cy="120"
                    r={mainRadius}

                    className="main-glow-ring"

                    strokeDasharray="505 515"

                    strokeDashoffset="35"

                    stroke="url(#loaderGradient)"

                    filter="url(#strongLoaderGlow)"
                  />

                  <motion.circle
                    cx="120"
                    cy="120"
                    r={mainRadius}

                    className="main-loader-ring"

                    strokeDasharray="505 515"

                    strokeDashoffset="35"

                    stroke="url(#loaderGradient)"

                    filter="url(#loaderGlow)"

                    animate={{
                      strokeDashoffset: [
                        35,
                        505,
                        35
                      ]
                    }}

                    transition={{
                      duration: 10,

                      ease: "linear"
                    }}
                  />

                  <circle
                    cx="120"
                    cy="120"
                    r="65"

                    className="inner-circle"
                  />



                  <circle
                    cx="120"
                    cy="120"
                    r="65"

                    className="inner-light-ring"
                  />


                  <motion.g

                    animate={{
                      rotate: 360
                    }}

                    transition={{
                      repeat: Infinity,

                      duration: 5,

                      ease: "linear"
                    }}

                    style={{
                      transformOrigin:
                        "120px 120px"
                    }}
                  >

                    <circle
                      cx="120"
                      cy="19"
                      r="3"

                      className="cyan-orbit-dot"
                    />


                    <circle
                      cx="120"
                      cy="19"
                      r="2.5"

                      className="purple-orbit-dot"

                      transform="
                        rotate(115 120 120)
                      "
                    />

                  </motion.g>

                  <motion.g

                    animate={{
                      rotate: [0, 360]
                    }}

                    transition={{
                      repeat: Infinity,

                      duration: 4,

                      ease: "linear"
                    }}

                    style={{
                      transformOrigin:
                        "120px 120px"
                    }}
                  >

                    <circle
                      cx="120"
                      cy="222"
                      r="3"

                      className="bottom-cyan-dot"
                    />


                    <circle
                      cx="120"
                      cy="222"
                      r="2.5"

                      className="bottom-purple-dot"

                      transform="
                        rotate(35 120 120)
                      "
                    />

                  </motion.g>

                </svg>


                <div className="center-content">

                  <AnimatePresence mode="wait">

                    <motion.span

                      key={timeLeft}

                      initial={{
                        opacity: 0,
                        scale: 0.7
                      }}

                      animate={{
                        opacity: 1,
                        scale: 1
                      }}

                      exit={{
                        opacity: 0,
                        scale: 1.15
                      }}

                      transition={{
                        duration: 0.2
                      }}

                      className="digit-text"
                    >

                      {timeLeft}

                    </motion.span>

                  </AnimatePresence>

                </div>

              </div>


              <div className="btn-group">

                <button
                  className="btn btn-pause"
                  onClick={toggleTimer}
                >

                  {isRunning ? (

                    <>

                      <Pause
                        size={13}
                        fill="#00f3ff"
                        color="#00f3ff"
                      />

                      <span>
                        PAUSE
                      </span>

                    </>

                  ) : (

                    <>

                      <Play
                        size={13}
                        fill="#00f3ff"
                        color="#00f3ff"
                      />

                      <span>
                        START
                      </span>

                    </>

                  )}

                </button>

                <button
                  className="btn btn-reset"
                  onClick={resetTimer}
                >

                  <RotateCcw
                    size={13}
                    color="#a855f7"
                  />

                  <span>
                    RESET
                  </span>

                </button>

              </div>


              <p className="footer-status">
                SYSTEM INITIALIZING
              </p>

            </motion.div>


          ) : (

            <motion.div

              key="coming-soon-state"

              initial={{
                opacity: 0,
                scale: 0.9
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              exit={{
                opacity: 0,
                scale: 0.9
              }}

              transition={{
                duration: 0.4
              }}

              className="card-content finish-content"
            >

              <div className="check-circle-wrapper">

                <div className="check-circle">

                  <Check
                    size={28}
                    className="check-icon"
                  />

                </div>

              </div>

              <div className="cs-title-box">

                <h1 className="cs-main-glow">
                  COMING
                </h1>

                <h1 className="cs-main-glow pink-glow">
                  SOON
                </h1>

              </div>

              <p className="cs-description">

                System synchronization complete.
                The next phase is initializing.

              </p>

              <button
                className="btn btn-full"
                onClick={resetTimer}
              >

                <RotateCcw
                  size={13}
                  color="#00f3ff"
                />

                <span>
                  RE-INITIALIZE SYSTEM
                </span>

              </button>


              <div className="finish-footer">

                <p className="footer-status highlight">
                  SYSTEM INITIALIZED
                </p>

                <p className="footer-subtext">
                  NEURAL TIMER - PHASE COMPLETE
                </p>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </div>
  );
}