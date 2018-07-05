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

export const setBall = (playerId, points, itWasRed, playerName) => (
    {
        type: SET_BALL,
        payload: {
            playerId: playerId,
            points: points,
            itWasRed: itWasRed,
            playerName: playerName
        }
    }
);
export const setBull = (playerId, playerName) => (
    {
        type: SET_BULL,
        payload: {
            playerId: playerId,
            playerName: playerName
        }
        
    }
);
export const setLast = (playerId) => (
    {
        type: SET_LAST,
        payload: playerId
    }
);
