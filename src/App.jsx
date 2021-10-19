import { Component } from "react";
import Section from './Components/Section/'
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from "./Components/Statistics/Statistics";
import Notification from './Components/Notification/Notification'
import styles from './App.module.css'

const x = styles;
console.log(x)

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClick = (e) => {
        const name = e.target.name;
        this.setState(prevState => ({
        [name]: prevState[name] + 1,
        }));
    }
    
    feedbacksCounter = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    };

    positivePercentageCalculator = () => {
        const amount = this.feedbacksCounter();
        const { good } = this.state;
        const percentage = (good * 100) / amount;
        return Math.round(percentage);
    };

    render() {
        const keys = Object.keys(this.state);
        const total = this.feedbacksCounter();
        const positivePercentage = this.positivePercentageCalculator();
        return ( 
            <div className={styles.App}>
                <Section title='Please, leave feedback' className={styles.title}>
                    <FeedbackOptions
                        options={keys}
                        handleClick={this.handleClick}
                    />
                </Section >

                {total === 0 ? <Notification message='No feedback given'/> :
                <Section title='Statistics' className={styles.title2}>
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={total}
                        positivePercentage={positivePercentage}/>
                    </Section>
                }
            </div>
        )
    }
}