import initialState from './initialState';

const replace = (arr, optionId, possibleValueId) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id != optionId) {
            newArr.push(arr[i]);
            continue;
        }
        let newPossibleValues = arr[i].possibleValues.map(possibleValue => {
            let newIsSelected = possibleValue.id == possibleValueId ? true : false;
            return {
                id: possibleValue.id,
                title: possibleValue.title,
                isSelected: newIsSelected
            }
        })
        let newOption = {
            id: arr[i].id,
            title: arr[i].title,
            class: arr[i].class,
            possibleValues: newPossibleValues
        }
        newArr.push(newOption);
    }
    return newArr;

    // return arr.map(option => {
    //     if(option.id !== optionId)
    //     return option;

    //     let newPossibleValues = arr[i].possibleValues.map(possibleValue => {
    //         let newIsSelected = possibleValue.id == possibleValueId ? true : false;
    //         return {
    //             id: possibleValue.id,
    //             title: possibleValue.title,
    //             isSelected: newIsSelected
    //         }
    //     });

    //     return {
    //         id: arr[i].id,
    //         title: arr[i].title,
    //         class: arr[i].class,
    //         possibleValues: newPossibleValues
    //     }
    // });
}

const options = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return {
                ...state,
                players: [...state.players, action.payload]
            };
        case "DELETE_PLAYER":
            let newList = state.players.filter((it) => it.id !== action.payload)
            return {
                ...state,
                players: newList
            };
        case "SET_NAME":
            let newNameList = state.players.map((it) => {
                it.name = it.id == action.payload.id ? action.payload.name : it.name;
                return it;
            });
            return {
                ...state,
                players: newNameList
            };
        case "SELECT_OPTION":
            let newState = Object.assign({}, state);
            newState[action.payload.key] = action.payload.value;
            return {
                ...newState
            };
        case "SET_STORE_VALUE":
            let newStateValue = Object.assign({}, state);
            newStateValue[action.payload.key] = action.payload.value;
            return {
                ...newStateValue
            };
        case "TOGGLE_CHECKLIST":
            return {
                ...state,
                checkListIsVisible: !state.checkListIsVisible
            };
        case "SET_PRICE":
            return {
                ...state,
                ballPrice: action.payload
            };
        default:
            return state;
    }
}

export default options;