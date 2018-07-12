import {
    SET_PLAYERS,
    SET_BALL,
    SET_BULL,
    SET_WHITE,
    SET_YELLOW,
    SET_RED,
    SET_LAST,
    START_REVERCE,
    SET_AVERS,
    SET_REVERCE
} from './actionTypes';

export const setPlayerList = (list) => (
    {
        type: SET_PLAYERS,
        payload: list
    }
);

export const setBall = (playerId, points, itWasRed, playerName, itWasLast, lastBallPoints, itWasWhite) => {
    return {
        type: SET_BALL,
        payload: {
            playerId: playerId,
            points: points,
            itWasWhite: itWasWhite,
            itWasRed: itWasRed,
            playerName: playerName,
            itWasLast: itWasLast,
            lastBallPoints: lastBallPoints
        }
    }
};
export const setBull = (config) => {
    const { playerId } = config;
    return {
        type: SET_BULL,
        payload: {
            playerId: playerId
        }
    }
};
export const setWhite = (config) => {
    const { playerId } = config;
    return {
        type: SET_WHITE,
        payload: {
            playerId: playerId
        }
    }
};
export const setYellow = (config) => {
    const { playerId } = config;
    return {
        type: SET_YELLOW,
        payload: {
            playerId: playerId
        }
    }
};
export const setRed = (config) => {
    const { playerId, redPoints } = config;
    return {
        type: SET_RED,
        payload: {
            playerId: playerId,
            redPoints: redPoints
        }
    }
};
export const setLast = (config) => {
    const { playerId, lastBall } = config;
    return {
        type: SET_LAST,
        payload: {
            playerId: playerId,
            lastBall: lastBall
        }
    }
};
export const stratReverce = () => {
    return {
        type: START_REVERCE
    }
};
export const setAvers = () => {
    return {
        type: SET_AVERS
    }
};
export const setReverce = () => {
    return {
        type: SET_REVERCE
    }
}