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
        case "SET_MARKER":
            return {
                ...state,
                markerName: action.payload
            }
        case "SELECT_OPTION":
            let newState = Object.assign({}, state);
            newState[action.payload.key] = action.payload.value;
            if(action.payload.key == 'withRed') {
                if(action.payload.value){
                    newState.lastBall = newState.redPoints;
                }else {
                    newState.lastBall = 1;
                    newState.redPoints = 2;
                }
            }
            if(action.payload.key == 'lastBallByCost') {
                action.payload.value
                ? newState.withRed ?  newState.lastBall = newState.redPoints : newState.lastBall = 1
                : newState.withRed ? newState.lastBall = newState.redPoints : newState.lastBall = 1;
            }
            return {
                ...newState
            };
        case "SET_STORE_VALUE":
            let newStateValue = Object.assign({}, state);
            newStateValue[action.payload.key] = action.payload.value;
            if(action.payload.key == 'redPoints') {
                newStateValue.lastBall = action.payload.value;
                
            }
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
        case "REDUCE_REDPOINTS": 
            let reducedRedPoints = state.redPoints > 0 ? state.redPoints-1 : 0;
            return {
                ...state,
                redPoints: reducedRedPoints
            };
        case "INCREACE_REDPOINTS": 
        let increacedRedPoints = state.redPoints +1;
        return {
            ...state,
            redPoints: increacedRedPoints
        };


        case "INCREACE_LASTBALLPRICE": 
        let increacedLastBallPrice = state.lastBall +1;
        return {
            ...state,
            lastBall: increacedLastBallPrice
        };
        case "REDUCE_LASTBALLPRICE": 
        let reducedLastBallPrice = state.lastBall > 0 ?  state.lastBall - 1 : 0;
        return {
            ...state,
            lastBall: reducedLastBallPrice
        };

        case "INCREACE_BALLPRICE": 
        let increacedBallPrice = state.ballPrice + 0.5;
        return {
            ...state,
            ballPrice: increacedBallPrice
        };
        case "REDUCE_BALLPRICE": 
        let reducedBallPrice = state.ballPrice > 0 ?  state.ballPrice - 0.5 : 0;
        return {
            ...state,
            ballPrice: reducedBallPrice
        };


        default:
            return state;
    }
}

export default options;