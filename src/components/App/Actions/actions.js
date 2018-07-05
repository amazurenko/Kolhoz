import {
    SET_PAGE,
    SET_OVERLAY,
    UNSET_OVERLAY,
    SET_VALIDATION_MESSAGES,
    CLEAR_VALIDATION_MESSAGES
} from './actionTypes'

export const setNewPage = (newPage) => (
    {
        type: SET_PAGE,
        payload: newPage
    }
);
export const activateOverlay = () => (
    { type: SET_OVERLAY }
);
export const deactivateOverlay = () => (
    { type: UNSET_OVERLAY }
);
export const setValidationMessages = (messages) => (
    {
        type: SET_VALIDATION_MESSAGES,
        payload: messages
    }
);
export const clearValidationMessages = () => (
    { type: CLEAR_VALIDATION_MESSAGES }
);





