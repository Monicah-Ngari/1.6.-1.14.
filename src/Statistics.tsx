import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  averageScore,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h1>Statistics</h1>
      {totalFeedbacks > 0 ? (
        <>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={totalFeedbacks} />
          <StatisticLine text="Average" value={averageScore} />
          <StatisticLine
            text="Positive"
            value={`${positiveFeedbackPercentage}%`}
          />
        </>
      ) : (
        <p>No feedback given yet.</p>
      )}
    </div>
  );
};

export default Statistics;
