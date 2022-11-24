import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'



export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const tagBtn = event.target.value;
    this.setState(prevState => {
      return {
        [tagBtn]: prevState[tagBtn] + 1,
      };
    })
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return parseInt(total ? 100 / total * this.state.good : 0);
  };

  render() {
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();

    return (<div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        {total ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positiveFeedback} />
          : <Notification message="There is no feedback" />
        }
      </Section>
    </div >);
  }
}
