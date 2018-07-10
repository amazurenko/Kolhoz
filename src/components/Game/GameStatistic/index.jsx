import React from 'react';
import img from '../../../media/bull.svg';
import { connect } from 'react-redux';

class GameStatistic extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { totalBalls, totalBulls, reds, yellows, whites, withRed } = this.props;
        return (
            <div className="css-game-statistic">
                <div className="css-game-stat-details">
                    <div className="css-stat white">
                        <div className="css-value">
                            {whites}
                        </div>
                    </div>
                    <div className="css-stat yellow">
                        <div className="css-value">
                            {yellows}
                        </div>
                    </div>
                    {withRed && (
                        <div className="css-stat red">
                            <div className="css-value">
                                {reds}
                            </div>
                        </div>
                    )}
                    <div className="css-stat-bulls">
                        <img className='css-stat-bull' src={img} alt="" />
                        <div className="css-total-bulls">
                            {totalBulls}
                        </div>
                    </div>
                </div>
                <div className="css-game-stat-total">
                    {totalBalls}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalBalls: state.game.totalBalls,
        totalBulls: state.game.totalBulls,
        whites: state.game.whites,
        reds: state.game.reds,
        yellows: state.game.yellows,
        withRed: state.options.withRed
    }
}

export default connect(mapStateToProps, null)(GameStatistic);