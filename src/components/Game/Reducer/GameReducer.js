const game = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLAYERS':
            return {
                ...state,
                players: action.payload,
                totalBalls: 0,
                totalBulls: 0,
                reds: 0,
                yellows: 0
            }
        case 'SET_BALL':
            const id = action.payload.playerId;
            const points = action.payload.points;
            const itWasRed = action.payload.itWasRed;

            let currentPlayerIndex = 0;
            let prevPlayerIndex = 0;
            let allBuls = 0;
            state.players.forEach(function (it, i) {
                if (it.id == id) {
                    currentPlayerIndex = i;
                }
                if (it.bull) {
                    allBuls += it.bull;
                }
            });
            prevPlayerIndex = currentPlayerIndex == 0
                ? state.players.length - 1
                : currentPlayerIndex - 1;
            let playersOrange = state.players.map((player, index) => {
                if (index == currentPlayerIndex) {
                    player.current = player.current + allBuls - player.bull + points;
                    player.bull = 0;
                    itWasRed ? player.totalReds++ : player.totalYellows++;
                    return player;
                }
                if (index == prevPlayerIndex) {
                    player.current = player.current - points - player.bull;
                    player.bull = 0;
                    return player;
                }
                if (index != prevPlayerIndex && index != prevPlayerIndex) {
                    player.current = player.current - player.bull;
                    player.bull = 0;
                    return player;
                }
            });
            let totalBalls = state.totalBalls + 1;
            let reds = itWasRed ? state.reds + 1 :  state.reds;
            let yellows = itWasRed ? state.yellows :  state.yellows + 1;
            return {
                ...state,
                totalBalls: totalBalls,
                reds: reds,
                yellows: yellows,
                players: playersOrange
            }
        case 'SET_RED':
            balls = state.balls + 1;
            return {
                ...state,
                balls: balls
            }
        case 'SET_BULL':
            let playersBull = state.players.map(player => {
                if (player.id == action.payload) {
                    player.bull++;
                    player.tottalBulls++;
                    return player;
                }
                return player;
            })
            let totalBulls = state.totalBulls + 1;
            return {
                ...state,
                totalBulls: totalBulls,
                players: playersBull
            }
        case 'SET_LAST':
            balls = state.balls + 1;
            return {
                ...state,
                balls: balls
            }
        default:
            return state;
    }
}

export default game;