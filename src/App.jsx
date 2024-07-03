import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const totalFeedbacks = good + neutral + bad;
  const averageScore = (good * 1 + neutral * 0 + bad * -1) / totalFeedbacks;
  const positiveFeedbackPercentage = (good / totalFeedbacks) * 100;

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedbacks={totalFeedbacks}
        averageScore={averageScore}
        positiveFeedbackPercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};

export default App;
