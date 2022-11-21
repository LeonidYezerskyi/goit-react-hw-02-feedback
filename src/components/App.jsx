import React from 'react';
// import PropTypes from "prop-types";

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'



export class App extends React.Component {
  static defaultProps = {};
  static propTypes = {
    // good: PropTypes.number.isRequired,
    // neutral: PropTypes.number.isRequired,
    // bad: PropTypes.number.isRequired,
    // total: PropTypes.number.isRequired,
    // positivePercentage: PropTypes.number.isRequired
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  addBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  // onLeaveFeedback = (event) => {
  //   const tagBtn = event.target.value;
  //   switch (tagBtn) {
  //     case 'good':
  //       this.addGood()
  //       break;
  //     case 'neutral':
  //       this.addNeutral()
  //       break;
  //     case 'bad':
  //       this.addBad()
  //       break;
  //     default:
  //       return;
  //   }
  // };

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
    let total = this.countTotalFeedback();
    return parseInt(total ? 100 / total * this.state.good : 0);
  };

  render() {
    let positiveFeedback = this.countPositiveFeedbackPercentage();
    let total = this.countTotalFeedback();

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
