import React from 'react';
import { connect } from 'react-redux';

import {
    clearNotification,
} from '../../data/actions/notificationActions';
import {
    isNotificationOpen,
    getNotificationType,
    getNotificationMessage,
} from '../../data/selectors/notificationSelectors';

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";

const notifiactionDuration = 5000;

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = ({
    type,
    isOpen,
    message,
    clearNotification,
}) => {
    const handleClose = () => clearNotification();

    return (
        isOpen
            ?
            <div className="notification">
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    onClose={handleClose}
                    open={isOpen}
                    autoHideDuration={notifiactionDuration}
                >
                    <Alert onClose={handleClose} severity={type}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
            : null
    );
};

const mapStateToProps = state => ({
    isOpen: isNotificationOpen(state),
    message: getNotificationMessage(state),
    type: getNotificationType(state),
});

const mapDispatchToProps = {
    clearNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
