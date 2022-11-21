import React from 'react';
import PropTypes from "prop-types";
import { StyleStatistics, StyleP } from './Styled.Statistics'


const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
(<div>

    <h2>Statistics</h2>
    <StyleStatistics>
        <StyleP>Good: {good}</StyleP>
        <StyleP>Neutral: {neutral}</StyleP>
        <StyleP>Bad: {bad}</StyleP>
        <StyleP>Total: {total} </StyleP>
        <StyleP>Positive feedback: {positivePercentage}%</StyleP>
    </StyleStatistics>
</div >);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;