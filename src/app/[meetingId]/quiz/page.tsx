'use client';
import { useState, useEffect } from 'react';

/**
 * 퀴즈 페이지.
 */
const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 5;
  const [timeLeft, setTimeLeft] = useState(10); // 타이머를 10초로 설정

  useEffect(() => {
    if (timeLeft > 0) {
      // 타이머가 1초마다 감소
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId); // 타이머를 정리
    } else {
      // 시간이 0이 되면 다음 문제로 이동
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1); // 다음 문제로 이동
        setTimeLeft(10); // 타이머를 10초로 리셋
      }
    }
  }, [timeLeft, currentQuestion]); // timeLeft와 currentQuestion이 변경될 때마다 실행

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
              width: `${(timeLeft / 10) * 100}%`, // 타이머 진행 상황
            }}
          ></div>
        </div>
        <span style={styles.timeLeft}>{timeLeft}</span>
      </div>
      <div style={styles.questionContainer}>
        <span style={styles.questionNumber}>문제 {currentQuestion}/{totalQuestions}</span>
        <div style={styles.questionBox}>
          <div>Q{currentQuestion}.</div>
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
    backgroundColor: '#ff0000',
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
    height: '70px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    marginTop: '5px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ddd',
    borderRadius: '5px',
  },
};

export default QuizPage;
