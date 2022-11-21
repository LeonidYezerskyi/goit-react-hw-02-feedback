import { StyledNotification } from './Styled.Notification';
import PropTypes from "prop-types";

const Notification = ({ message = 'There is no feedback' }) => (<StyledNotification>{message}</StyledNotification>);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;