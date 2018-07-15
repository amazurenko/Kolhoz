import { getBullData, getWhiteData, getYellowData, getRedData, getLastData, startRevLogMessage, startAvLogMessage, gameOverMessage } from './operators'

const game = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLAYERS':
            return {
                ...state,
                isReverce: false,
                players: action.payload,
                totalBalls: 0,
                totalBulls: 0,
                whites: 0,
                reds: 0,
                yellows: 0,
                log: [startAvLogMessage()],
                results: {
                    avers: {},
                    reverce: {}
                }
            };
        case 'SET_GAMEOVER_MESS':
            return {
                ...state,
                log: [gameOverMessage(), ...state.log]
            };
        case 'SET_AVERS':
            let newStateAvers = Object.assign({}, state);
            let avers = {
                players: newStateAvers.players,
                totalBalls: newStateAvers.totalBalls,
                totalBulls: newStateAvers.totalBulls,
                whites: newStateAvers.whites,
                reds: newStateAvers.reds,
                yellows: newStateAvers.yellows
            };
            const newResultsAv = { ...newStateAvers.results, avers: avers, reverce: {} };
            return {
                ...state,
                results: newResultsAv
            }
        case 'SET_REVERCE':
            let newStateReverce = Object.assign({}, state);
            let reverce = {
                players: newStateReverce.players,
                totalBalls: newStateReverce.totalBalls,
                totalBulls: newStateReverce.totalBulls,
                whites: newStateReverce.whites,
                reds: newStateReverce.reds,
                yellows: newStateReverce.yellows
            };
            const newResultsRev = { ...newStateReverce.results, reverce: reverce };
            return {
                ...state,
                results: newResultsRev
            }

        case 'START_REVERCE':
            let newStateRev = Object.assign({}, state);
            let cleanedPlayers = newStateRev.players.map(player => Object.assign({}, player,
                {
                    current: 0,
                    bull: 0,
                    totalWhites: 0,
                    totalReds: 0,
                    totalYellows: 0,
                    tottalBulls: 0
                }
            ))
            const startReverceLogMessage = startRevLogMessage();
            let myNewState = {
                ...state,
                isReverce: true,
                players: Array.from(cleanedPlayers).reverse(),
                totalBalls: 0,
                totalBulls: 0,
                whites: 0,
                reds: 0,
                yellows: 0,
                log: [startReverceLogMessage, ...state.log]
            }
            return myNewState;
        case 'SET_BULL':
            const bullData = getBullData(state, action.payload);
            return {
                ...state,
                players: bullData.players,
                totalBulls: bullData.totalBulls,
                log: [bullData.logMessage, ...state.log]
            }
        case 'SET_WHITE':
            const whiteData = getWhiteData(state, action.payload);
            return {
                ...state,
                players: whiteData.players,
                totalBalls: whiteData.totalBalls,
                whites: whiteData.whites,
                log: [whiteData.logMessage, ...state.log]
            };
        case 'SET_YELLOW':
            const yellowData = getYellowData(state, action.payload);
            return {
                ...state,
                players: yellowData.players,
                totalBalls: yellowData.totalBalls,
                yellows: yellowData.yellows,
                log: [yellowData.logMessage, ...state.log]
            };
        case 'SET_RED':
            const redData = getRedData(state, action.payload);
            return {
                ...state,
                players: redData.players,
                totalBalls: redData.totalBalls,
                reds: redData.reds,
                log: [redData.logMessage, ...state.log]
            };
        case 'SET_LAST':
            const lastData = getLastData(state, action.payload);
            return {
                ...state,
                players: lastData.players,
                log: [lastData.logMessage, ...state.log]
            };
        default:
            return state;
    }
}
export default game;