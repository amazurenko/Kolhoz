import React from 'react';
import { connect } from 'react-redux';


class GameInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { withReverce, payAll, isRandom, withRed, redPoints, lastBallByCost, lastBall, customBallPrice, ballPrice } = this.props;
        return (
            <div className="css-game-info">
                <div className="css-info-title">Условия игры:</div>
                <div className="css-info-options">
                    <div className="css-info-option">
                        {withReverce ? '- C реверсом' : '- Без реверса'}
                    </div>
                    <div className="css-info-option">
                        {payAll ? '- Свет на всех' : '- Платят минусовые'}
                    </div>
                    <div className="css-info-option">
                        {isRandom ? '- Автожеребьевка' : '- Без жеребьевки'}
                    </div>
                    <div className="css-info-option">
                        {withRed ? `- С красным. Красный за ${redPoints}` : '- Игра c одним цветным'}
                    </div>
                    <div className="css-info-option">
                        {lastBallByCost ? `- Последний за ${withRed ? redPoints : 1}` : `- Последний за ${lastBall}`}
                    </div>
                    <div className="css-info-option">
                        {customBallPrice ? `- Играем по  ${ballPrice} за шарик` : `- Цена за шар не указана.`}
                    </div>
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
        ballPrice: state.options.ballPrice
    }
}

export default connect(mapStateToProps)(GameInfo);