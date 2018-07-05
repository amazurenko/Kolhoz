import {
    SET_PLAYERS,
    SET_BALL,
    SET_BULL,
    SET_LAST
} from './actionTypes';

export const setPlayerList = (list) => (
    {
        type: SET_PLAYERS,
        payload: list
    }
);

export const setBall = (playerId, points, itWasRed) => (
    {
        type: SET_BALL,
        payload: {
            playerId: playerId,
            points: points,
            itWasRed: itWasRed
        }
    }
);
export const setBull = (playerId) => (
    {
        type: SET_BULL,
        payload: playerId
    }
);
export const setLast = (playerId) => (
    {
        type: SET_LAST,
        payload: playerId
    }
);
