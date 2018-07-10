import { getBullData, getWhiteData, getYellowData, getRedData, getLastData } from './operators'

const game = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLAYERS':
            return {
                ...state,
                players: action.payload,
                totalBalls: 0,
                totalBulls: 0,
                whites: 0,
                reds: 0,
                yellows: 0,
                log: []
            };
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