import React from 'react';
import PropTypes from "prop-types";
import { StyledButton } from './StyledFeedback';


const FeedbackOptions = ({ options, onLeaveFeedback }) =>
(<div>
    {options.map((el, index) => {
        return <StyledButton key={index} type='button' value={el} onClick={onLeaveFeedback}>{el}</StyledButton>
    })}
</div>);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;