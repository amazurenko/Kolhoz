// import {ADD_PLAYER, DELETE_PLAYER} from "./actionTypes";
// import {createActions} from "redux-actions";

// export const { addPlayer, deletePlayer} = createActions({
//     ADD_PLAYER,
//     DELETE_PLAYER
// });

import {
    ADD_PLAYER,
    DELETE_PLAYER,
    SET_NAME,
    SELECT_OPTION,
    SET_PRICE,
    SET_STORE_VALUE,
    SET_MARKER,
    REDUCE_REDPOINTS,
    INCREACE_REDPOINTS,
    INCREACE_LASTBALLPRICE,
    REDUCE_LASTBALLPRICE,
    INCREACE_BALLPRICE,
    REDUCE_BALLPRICE
} from "./actionTypes";

export const addNewPlayer = () => (
    {
        type: ADD_PLAYER,
        payload: {
            id: Date.now().toString(),
            name: "",
            canRemove: true
        }
    }
);
export const removePlayer = (id) => (
    {
        type: DELETE_PLAYER,
        payload: id
    }
);
export const setPlayerName = (event) => (
    {
        type: SET_NAME,
        payload: {
            id: event.target.id,
            name: event.target.value
        }
    }
);
export const setOption = (key, value) => (
    {
        type: SELECT_OPTION,
        payload: {
            key: key,
            value: value
        }
    }
);

export const setBallPrice = (event) => {
    let value = 1 * event.target.value;

    return {
        type: SET_PRICE,
        payload: value
    }
}
export const setStoreValue = (key, event) => {
    const value = 1 * event.target.value;
    return {
        type: SET_STORE_VALUE,
        payload: {
            key: key,
            value: value
        }
    }
}
export const setMarker = (event) => {
    let value = event.target.value;
    return {
        type: SET_MARKER,
        payload: value
    }
}
export const redRedPoints = () => {
    return {
        type: REDUCE_REDPOINTS
    }
}
export const incRedPoints = () => {
    return {
        type: INCREACE_REDPOINTS
    }
}
export const incLastBallPrice = () => {
    return {
        type: INCREACE_LASTBALLPRICE
    }
}
export const redLastBallPrice = () => {
    return {
        type: REDUCE_LASTBALLPRICE
    }
}

export const incBallPrice = () => {
    return {
        type: INCREACE_BALLPRICE
    }
}
export const redBallPrice = () => {
    return {
        type: REDUCE_BALLPRICE
    }
}
