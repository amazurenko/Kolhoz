export const getStartupData = state => {
    const { options = {} } = state;
    let data = options.startOptions.map(startOption => {
        return startOption.possibleValues.filter(possibleValue => {
            return possibleValue.isSelected;
        })[0]
    });
    return {
        ballPrice: options.ballPrice,
        customBallPrice: options.customBallPrice,
        lastBall: options.lastBall,
        lastBallByCost: options.lastBallByCost,
        redPoints: options.redPoints,
        withRed: options.withRed,
        isRandom: options.isRandom,
        payAll: options.payAll,
        withReverce: options.withReverce,
        players: options.players,
        startupData: data
    }
}