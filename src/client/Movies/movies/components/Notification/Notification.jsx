import React from 'react';
import PropTypes from 'prop-types';

function Notification({children}) {
    return <p>{children}</p>
};

export default Notification;

Notification.propTypes = {
    text: PropTypes.string
}