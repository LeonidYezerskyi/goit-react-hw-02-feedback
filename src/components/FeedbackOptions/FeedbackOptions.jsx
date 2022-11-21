import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
(<div>
    {options.map((el, index) => {
        return <button key={index} type='button' value={el} onClick={onLeaveFeedback}>{el}</button>
    })}
</div>);

export default FeedbackOptions;