import { 
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION,
} from '../actionTypes';

const initialState = {
    isOpen: false,
    message: '',
    type: '',
}

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION: return {
            isOpen: true,
            type: action.payload.type,
            message: action.payload.message,
        }
        case HIDE_NOTIFICATION: return initialState;
        default: return state;
    }
}
