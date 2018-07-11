import { getBullData, getWhiteData, getYellowData, getRedData, getLastData, resetAndRevercePlayers, startRevLogMessage } from './operators'

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
                log: [],
                results: {
                    avers: {},
                    reverce: {}
                }
            };
        case 'SET_AVERS':
            console.log("SET_AVERS state", state);
            let newState = {};
            for (let prop in state) {
                    newState[prop] = state[prop];
            }
            console.log("SET_AVERS newState", newState);
            let avers = {
                pl: action.payload,
                totalBalls: newState.totalBalls,
                totalBulls: newState.totalBulls,
                whites: newState.whites,
                reds: newState.reds,
                yellows: newState.yellows
            };
            console.log("avers", avers);
            const newResults = {...newState.results, avers: avers, reverce: {}};
            console.log("SET_AVERS newResults", newResults);
            const myState = {
                ...state, 
                results: newResults
            }
            console.log("myState", myState);
            return myState;
        case 'START_REVERCE':
            console.log("START_REVERCE state", state);
            let newStateRev = {};
            for (let prop in state) {
                    newStateRev[prop] = state[prop];
            }
            console.log("START_REVERCE state", newStateRev);

            debugger
            // const cleanedPlayers = resetAndRevercePlayers(newStateRev.players);
            let cleanedPlayers = newStateRev.players.map(function(player){
                player.current = 0;
                player.bull = 0;
                player.totalWhites = 0;
                player.totalReds = 0;
                player.totalYellows = 0;
                player.tottalBulls = 10;
                return player;
            })
            console.log("cleanedPlayers", cleanedPlayers);

            const startReverceLogMessage = startRevLogMessage();
            let myNewState = {
                ...state,
                isReverce: true,
                players: cleanedPlayers,
                totalBalls: 0,
                totalBulls: 0,
                whites: 0,
                reds: 0,
                yellows: 0,
                log: [startReverceLogMessage, ...state.log],
                results: state.results
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