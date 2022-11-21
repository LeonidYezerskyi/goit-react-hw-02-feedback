import React from 'react';
import PropTypes from "prop-types";
import { StyledSection } from './StyledSection';

const Section = ({ title, children }) =>
(<StyledSection>
    <h1>{title}</h1>
    {children}
</StyledSection>);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;