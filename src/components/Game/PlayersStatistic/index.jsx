import React from 'react';
import img from '../../../media/bull.svg';
import { connect } from 'react-redux';

class PlayersStatistic extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { players, withRed } = this.props;
        return (
            <div className="css-players-statistic">
                {players.map(player => (
                    <div className='css-stat-player' key={player.id}>
                        <div className="css-player-stat-name">
                            {`${player.name}:`}
                        </div>
                        <div className="css-player-total yellows">
                            <div className="css-player-total-value">
                                {player.totalYellows}
                            </div>
                        </div>
                        {withRed && (
                            <div className="css-player-total reds">
                                <div className="css-player-total-value">
                                    {player.totalReds}
                                </div>
                            </div>)}
                        <div className="css-player-total bulls">
                            <img className='css-player-stat-bull' src={img} alt=""/>
                            <div className="css-player-total-value">
                                {player.tottalBulls}
                            </div>
                        </div>
                        {withRed && (
                            <div className="css-player-total all">
                                <div className="css-player-total-value">
                                    {player.totalYellows + player.totalReds}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.game.players,
        withRed: state.options.withRed
    }
}

export default connect(mapStateToProps, null)(PlayersStatistic);