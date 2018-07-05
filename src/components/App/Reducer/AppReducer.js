const initialState = {
    currentPage: "Options",
    isOverlay: false,
    validationMessages: []
};

const app = (state = initialState, action) => {
    switch(action.type){
        case 'SET_PAGE':
            return {...state, currentPage: action.payload};
        case 'SET_VALIDATION_MESSAGES':
            return {...state, validationMessages: action.payload};
        case 'CLEAR_VALIDATION_MESSAGES':
            return {...state, validationMessages: []};
        case "SET_OVERLAY":
            return {...state, isOverlay: true};
        case "UNSET_OVERLAY":
            return {...state, isOverlay: false};
        default:
            return state;
    }
}

export default app;