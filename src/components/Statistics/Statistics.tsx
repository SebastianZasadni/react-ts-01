interface Props {
  good: number;
  bad: number;
  neutral: number;
  total: number;
  feedbackPercentage: number;
}

export const Statistics = ({ good, bad, neutral, total, feedbackPercentage }: Props) => {
  return (
    <div>
      {total ? (
        <div>
          <span> Good: {good}</span>
          <span> Neutral: {neutral}</span>
          <span> Bad: {bad}</span>
          <span> Total: {total}</span>
          <span> Positive feedback: {feedbackPercentage}%</span>
        </div>
      ) : (
        <p>There is no feedback.</p>
      )}
    </div>
  );
};
