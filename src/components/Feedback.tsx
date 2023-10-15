import { useState } from 'react';

import { FeedbackOptions, Option, Options } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

interface State {
  good: number;
  bad: number;
  neutral: number;
}

export const Feedback = () => {
  const [state, setState] = useState<State>({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = state;
  const options: Options = ['good', 'neutral', 'bad'];

  const leaveFeedbackHandler = (option: Option) => {
    setState((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const getFeedbackPercentage = (): number => {
    if (good) {
      return parseFloat(((good * 100) / (good + bad + neutral)).toFixed(2));
    } else {
      return 0;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedbackHandler} />
      </Section>
      <Section title="Your feedback">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + bad + neutral}
          feedbackPercentage={getFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
