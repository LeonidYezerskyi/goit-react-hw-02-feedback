import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
(<div>

    <h2>Statistics</h2>
    <div>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total} </span>
        <span>Positive feedback: {positivePercentage}%</span>
    </div>
</div >);


export default Statistics;