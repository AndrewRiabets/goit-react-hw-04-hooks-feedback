import { useState } from 'react';
import Section from './Components/Section/';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notification';
import styles from './App.module.css';

const options = ['good', 'neutral', 'bad'];

export default function App() {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  const handleClick = e => {
    const { name } = e.target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'good':
        setCounterGood(prevCounterGood => prevCounterGood + 1);
        break;
      case 'neutral':
        setCounterNeutral(prevCounterNeutral => prevCounterNeutral + 1);
        break;
      case 'bad':
        setCounterBad(prevCounterBad => prevCounterBad + 1);
        break;
    }
  };

  const feedbacksCounter = () => {
    return counterGood + counterNeutral + counterBad;
  };

  const positivePercentageCalculator = () => {
    return counterGood
      ? Math.ceil((counterGood / feedbacksCounter()) * 100)
      : 0;
  };

  //   const keys = Object.keys(this.state);
  const total = feedbacksCounter();
  const positivePercentage = positivePercentageCalculator();

  return (
    <div className={styles.App}>
      <Section title="Please, leave feedback" className={styles.title}>
        <FeedbackOptions options={options} handleClick={handleClick} />
      </Section>

      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics" className={styles.title2}>
          <Statistics
            good={counterGood}
            neutral={counterNeutral}
            bad={counterBad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}
