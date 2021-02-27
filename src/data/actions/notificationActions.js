import {
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION,
} from "../actionTypes";

export const notificationType = {
    info: 'info',
    error: 'error',
    success: 'success',
    warning: 'warning',
}

const showMessage = notification => ({
    type: SHOW_NOTIFICATION,
    payload: notification,
})

const hideMessage = () => ({
    type: HIDE_NOTIFICATION,
})

export const showNotification = (message, type) => async dispatch => {
    try {
        const notification = { message, type };
        dispatch(showMessage(notification));
    } catch (err) {
        console.error(err);
    }
}

export const clearNotification = () => async dispatch => {
    try {
        dispatch(hideMessage());
    } catch (err) {
        console.error(err);
    }
}
