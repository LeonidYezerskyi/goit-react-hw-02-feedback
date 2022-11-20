import React from 'react';

class Feedback extends React.Component {
    static defaultProps = {};
    static propTypes = {};

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

    render() {
        return <div>
            <h1>Please leave feedback</h1>

            <div>
                <button type='button' onClick={this.addGood}>Good</button>
                <button type='button' onClick={this.addNeutral}>Neutral</button>
                <button type='button' onClick={this.addBad}>Bad</button>
            </div>

            <h2>Statistics</h2>
            <div>
                <span>Good: {this.state.good}</span>
                <span>Neutral: {this.state.neutral}</span>
                <span>Bad: {this.state.bad}</span>
            </div>
        </div>;
    }
}

export default Feedback;