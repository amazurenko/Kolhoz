import React from 'react';
import { connect } from 'react-redux';
import Player from './Player/index.jsx';
import GameStatistic from './GameStatistic/index';
import PlayersStatistic from './PlayersStatistic/index';

import img from '../../media/bull.svg';

import {
    setBall,
    setBull,
    setLast
} from './Actions/actions'

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    playersWithBulls(players) {
        let damages = [];
        players.forEach(player => {
            if (player.bull) {
                for (let i = 0; i < player.bull; i++) {
                    damages.push(player);
                }
            }
        });
        return damages;
    }
    render() {
        const {
            app,
            options,
            game,

            handleBall,
            handleBull,
            handleLast
        } = this.props;
        const { withReverce, payAll, isRandom, withRed, redPoints, yellowPoints, lastBall, lastBallByCost, customBallPrice, ballPrice } = this.props.options;
        const bulls = this.playersWithBulls(game.players);
        return (
            <div className='css-game'>
                <div className="css-body">
                    <div className="css-left-bar">
                        <div className="css-timer"></div>
                        <div className="css-info"></div>
                    </div>
                    <div className="css-center-block">
                        <div className="css-main">
                            <div className="css-players-grid">
                                {game.players.map(player => {
                                    return <Player
                                        key={player.id}
                                        {...player}
                                        handleBall={handleBall}
                                        handleBull={handleBull}
                                        handleLast={handleLast}
                                        customBallPrice={customBallPrice}
                                        ballPrice={ballPrice}
                                        withRed={withRed}
                                        redPoints={redPoints}
                                    />
                                })}
                            </div>
                            <div className="css-main-block-footer">
                                <div className="css-bull">
                                    {bulls.map((bull, index) => (
                                        <div key={index} className="css-bull-item">
                                            <div className='css-bull-item-name'>{bull.name}</div>
                                            <img className='css-bull-image' src={img} alt="" />
                                        </div>
                                    ))}
                                </div>
                                <button className="css-button">Откатить ход</button>
                            </div>
                        </div>
                    </div>
                    <div className="css-right-bar">
                        <div className="css-statistic">
                            <GameStatistic />
                            <PlayersStatistic />
                        </div>



                        <div className="css-log">
                            <div className='css-logs-container'>
                                {game.log.map((it, index) => {
                                    return  it.ball == 'bull'
                                    ? (
                                        <div key={index} className='css-log-item'>
                                            <div className='css-log-time red' >{it.time}</div>
                                            <span>Игрок</span>
                                            <div className='css-log-name'>{it.name}</div>
                                            <span>получил штраф</span>
                                        </div>
                                    )
                                    : (
                                        <div key={index} className='css-log-item'>
                                            <div className='css-log-time' >{it.time}</div>
                                            <span>Игрок</span>
                                            <div className='css-log-name'>{it.name}</div>
                                            <span>забил</span>
                                            <div className={['css-log-ball', it.ball == 'красный' ? 'red' : 'yellow'].join(' ')}>{it.ball}</div>
                                            <span>шар</span>
                                            {it.bulls != 0 && (<div className='css-log-bulls'>{` + ${it.bulls} за штраф`}</div>)
                                            }
                                        </div>
                                    )
                                })}
                                       







                            </div>
                        </div>
                    </div>
                </div>
                <div className="css-footer">
                    <div className="css-footer-controls">
                        <button className='css-button'>Начать реверс</button>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        handleBall(playerId, points, itWasRed, playerName) {
            dispatch(setBall(playerId, points, itWasRed, playerName))
        },
        handleBull(playerId, playerName) {
            dispatch(setBull(playerId, playerName))
        },
        handleLast(playerId) {
            dispatch(setLast(playerId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);