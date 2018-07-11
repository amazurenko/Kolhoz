const getIndexes = ((playersArray, playerId) => {
    let currentPlayerIndex = 0;
    let prevPlayerIndex = 0;
    playersArray.forEach(function (it, i){
        if(it.id == playerId) currentPlayerIndex = i;
    });
    prevPlayerIndex = currentPlayerIndex == 0
    ? playersArray.length - 1
    : currentPlayerIndex - 1;
    return {
        currentPlayerIndex: currentPlayerIndex,
        prevPlayerIndex: prevPlayerIndex
    }
});
const getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return {
        hours: hours,
        minutes: minutes
    }
};
const getPlayerName = ((playersArray, playerId) => {
    let playerName;
    playersArray.forEach(function (it, i){
        if(it.id == playerId) playerName = it.name;
    });
    return playerName;
});
const getPlayersBulls = ((playersArray) => {
    let playersBulls = 0;
    playersArray.forEach(function (it){
        if(it.bull != 0) 
            playersBulls += it.bull;
    });
    return playersBulls;
});


export const getBullData = (state, payload) => {
    const { playerId } = payload;
    const { players, totalBulls } = state;
    let newPlayers = players.map(player => {
        if (player.id == playerId) {
            player.bull++;
            player.tottalBulls++;
        }
        return player;
    })
    const newTotalBulls = totalBulls + 1;
    const time = getTime();
    let newLogMessage = { time: `${time.hours}:${time.minutes}`, name: getPlayerName(players, playerId), message: ` получил штраф`};
    return {
        players: newPlayers,
        totalBulls: newTotalBulls,
        logMessage: newLogMessage
    }
};

export const getWhiteData = (state, payload) => {
    const { playerId } = payload;
    const { players, totalBalls, whites } = state;
    const ind = getIndexes(players, playerId);
    const { currentPlayerIndex, prevPlayerIndex } = ind;
    const playersBulls = getPlayersBulls(players);

    let newPlayers = players.map((player, index) => {
        if (index == currentPlayerIndex) {
            player.totalWhites++;
            player.current = player.current + 1 + playersBulls - player.bull;
            player.bull = 0;
        }
        if (index == prevPlayerIndex) {
            player.current = player.current - 1 - player.bull;
            player.bull = 0;
        }
        if (index != currentPlayerIndex && index != prevPlayerIndex){
            player.current = player.current - player.bull;
            player.bull = 0;
        }
        return player;
    });

    const newTotalBalls = totalBalls + 1;
    const newWhites = whites + 1;
    const time = getTime();

    let newLogMessage = { time: `${time.hours}:${time.minutes}`, name: getPlayerName(players, playerId), message: ` забил белый. Снято штрафов - ${playersBulls}`}
    return {
        players: newPlayers,
        totalBalls: newTotalBalls,
        whites: newWhites,
        logMessage: newLogMessage
    }
};

export const getYellowData = (state, payload) => {
    const { playerId } = payload;
    const { players, totalBalls, yellows } = state;
    const ind = getIndexes(players, playerId);
    const { currentPlayerIndex, prevPlayerIndex } = ind;
    const playersBulls = getPlayersBulls(players);

    let newPlayers = players.map((player, index) => {
        if (index == currentPlayerIndex) {
            player.totalYellows++;
            player.current = player.current + 1 + playersBulls - player.bull;
            player.bull = 0;
        }
        if (index == prevPlayerIndex) {
            player.current = player.current - 1 - player.bull;
            player.bull = 0;
        }
        if (index != currentPlayerIndex && index != prevPlayerIndex){
            player.current = player.current - player.bull;
            player.bull = 0;
        }
        return player;
    });

    const newTotalBalls = totalBalls + 1;
    const newYellows = yellows + 1;
    const time = getTime();

    let newLogMessage = { time: `${time.hours}:${time.minutes}`, name: getPlayerName(players, playerId), message: ` забил желтый. Снято штрафов - ${playersBulls}`}
    return {
        players: newPlayers,
        totalBalls: newTotalBalls,
        yellows: newYellows,
        logMessage: newLogMessage
    }
}

export const getRedData = (state, payload) => {
    const { playerId, redPoints } = payload;
    const { players, totalBalls, reds } = state;
    const ind = getIndexes(players, playerId);
    const { currentPlayerIndex, prevPlayerIndex } = ind;
    const playersBulls = getPlayersBulls(players);

    let newPlayers = players.map((player, index) => {
        if (index == currentPlayerIndex) {
            player.totalReds++;
            player.current = player.current + redPoints + playersBulls - player.bull;
            player.bull = 0;
        }
        if (index == prevPlayerIndex) {
            player.current = player.current - redPoints - player.bull;
            player.bull = 0;
        }
        if (index != currentPlayerIndex && index != prevPlayerIndex){
            player.current = player.current - player.bull;
            player.bull = 0;
        }
        return player;
    });

    const newTotalBalls = totalBalls + 1;
    const newReds = reds + 1;
    const time = getTime();

    let newLogMessage = { time: `${time.hours}:${time.minutes}`, name: getPlayerName(players, playerId), message: ` забил красный. Снято штрафов - ${playersBulls}`}
    return {
        players: newPlayers,
        totalBalls: newTotalBalls,
        reds: newReds,
        logMessage: newLogMessage
    }
};

export const getLastData = (state, payload) => {
    const { playerId, lastBall } = payload;
    const { players } = state;
    const ind = getIndexes(players, playerId);
    const { currentPlayerIndex, prevPlayerIndex } = ind;

    let newPlayers = players.map((player, index) => {
        if (index == currentPlayerIndex) {
                player.current = player.current + lastBall;
        }
        if (index == prevPlayerIndex) {
            player.current = player.current - lastBall;
        }
        return player;
    });

    const time = getTime();

    let newLogMessage = { time: `${time.hours}:${time.minutes}`, name: getPlayerName(players, playerId), message: ` забил последний`}
    return {
        players: newPlayers,
        logMessage: newLogMessage
    }
};

export const resetAndRevercePlayers = (playersArray) => {
    console.log('playersArray ENTER', playersArray);
    let newPlayers = playersArray.map(player => {
        player.current = 0;
        player.bull = 0;
        player.totalWhites = 0;
        player.totalYellows = 0;
        player.totalReds = 0;
        player.tottalBulls = 0;
        return player;
    }).reverse();
    console.log('playersArray OUT', playersArray);

    return newPlayers;
};

export const startRevLogMessage = () => {
    const time = getTime();
    let newLogMessage = { time: `${time.hours}:${time.minutes}`, name: 'TEMP', message: ` Реверс начался`}
    return newLogMessage;
}