'use client';
import { useState } from 'react';

/**
 * 퀴즈 페이지.
 */
const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 5;
  const timeLeft = 20; // 남은 시간 (초 단위)

  return (
    <div style={styles.quizContainer}>
      <div style={styles.statusBar}>
        <span style={styles.progressText}>
          문제 풀이 현황 {currentQuestion}/{totalQuestions}
        </span>
      </div>
      <div style={styles.timerContainer}>
        <div style={styles.timerBarContainer}>
          <div
            style={{
              ...styles.timerBar,
              width: `${(timeLeft / 20) * 100}%`, // 타이머 진행 상황
            }}
          ></div>
        </div>
        <span style={styles.timeLeft}>{timeLeft}</span>
      </div>
      <div style={styles.questionContainer}>
        <span style={styles.questionNumber}>문제 {currentQuestion}/{totalQuestions}</span>
        <div style={styles.questionBox}>
          <div>Q1.</div>
          <textarea placeholder="A." style={styles.answerBox}></textarea>
        </div>
      </div>
      <button style={styles.submitButton}>답안 제출</button>
    </div>
  );
};

const styles = {
  quizContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '300px',
    fontFamily: 'Arial, sans-serif',
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  progressText: {
    fontSize: '12px',
  },
  timerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  timerBarContainer: {
    flex: 1,
    height: '8px',
    backgroundColor: '#ddd',
    marginRight: '10px',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  timerBar: {
    height: '100%',
    backgroundColor: '#000',
  },
  timeLeft: {
    fontSize: '12px',
  },
  questionContainer: {
    marginBottom: '10px',
  },
  questionNumber: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  questionBox: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
  },
  answerBox: {
    width: '100%',
    height: '50px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    marginTop: '5px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QuizPage;
