import React from 'react';
import { connect } from 'react-redux';


class GameInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { withReverce, payAll, isRandom, withRed, redPoints, lastBallByCost, lastBall, customBallPrice, ballPrice, markerName } = this.props;
        return (
            <div className="css-game-info">
                <div className="css-info-title">Условия игры:</div>
                <div className="css-info-options">
                    {markerName &&(<div className="css-info-option">
                        {`Маркер: ${markerName}`}
                    </div>)}
                    <div className="css-info-option">
                        {withReverce ? 'Игра с реверсом' : 'Игра без реверса'}
                    </div>
                    <div className="css-info-option">
                        {payAll ? 'Свет на всех' : 'Платят минусовые'}
                    </div>
                    <div className="css-info-option">
                        {isRandom ? 'Автожеребьевка' : 'Без жеребьевки'}
                    </div>
                    <div className="css-info-option">
                        {withRed ? `С красным. Красный за ${redPoints}` : 'Игра c одним цветным'}
                    </div>
                    <div className="css-info-option">
                        {lastBallByCost ? `Последний за ${withRed ? redPoints : 1}` : `Последний за ${lastBall}`}
                    </div>
                    {customBallPrice && (<div className="css-info-option">
                        {`Играем по  ${ballPrice} за шарик`}
                    </div>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        withReverce: state.options.withReverce,
        payAll: state.options.payAll,
        isRandom: state.options.isRandom,
        withRed: state.options.withRed,
        redPoints: state.options.redPoints,
        lastBallByCost: state.options.lastBallByCost,
        lastBall: state.options.lastBall,
        customBallPrice: state.options.customBallPrice,
        ballPrice: state.options.ballPrice,
        markerName: state.options.markerName
    }
}

export default connect(mapStateToProps)(GameInfo);