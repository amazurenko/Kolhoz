import React from 'react';
import { connect } from 'react-redux';
import Player from './Player/index.jsx';
import GameStatistic from './GameStatistic/index';
import PlayersStatistic from './PlayersStatistic/index';
import GameInfo from './GameInfo/index';

import img from '../../media/bull.svg';

import {
    setBall,
    setBull,
    setWhite,
    setYellow,
    setRed,
    setLast,
    stratReverce,
    setAvers,
    setReverce,
    setGameOverMessage
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
            handleWhiteBall,
            handleYellowBall,
            handleRedBall,
            handleLastBall,
            setPage,
            setReverce,
            saveAvers,
            saveReverce,
            gameOverMessage
        } = this.props;
        
        const { withReverce, payAll, isRandom, withRed, redPoints, yellowPoints, lastBall, lastBallByCost, customBallPrice, ballPrice } = this.props.options;
        const bulls = this.playersWithBulls(game.players);
        let whitesArr = new Array(15 - (game.whites > 15 ? 15 : game.whites)).fill(0);
        return (
            <div className='css-game'>
                <div className="css-body">
                    <div className="css-left-bar">
                        <div className="css-timer"></div>
                        <div className="css-info">
                            <GameInfo />
                        </div>
                    </div>
                    <div className="css-center-block">
                        {whitesArr.length > 0 && (
                            <div className="css-total-whites">
                                {whitesArr.map((ball, index) => (<div key={index} className="whiteBallItem"></div>))}
                            </div>
                        )}
                        <div className="css-main">
                            <div className="css-players-grid">
                                {game.players.map(player => {
                                    return <Player
                                        key={player.id}
                                        {...player}
                                        handleBall={handleBall}

                                        customBallPrice={customBallPrice}
                                        ballPrice={ballPrice}
                                        withRed={withRed}
                                        withReverce={withReverce}
                                        redPoints={redPoints}
                                        lastBall={lastBall}
                                        isWhitesAre={whitesArr.length > 0}
                                        whites={game.whites}
                                        whitesArr={whitesArr}
                                        lastBallByCost={lastBallByCost}
                                        handleBull={handleBull}
                                        handleWhiteBall={handleWhiteBall}
                                        handleYellowBall={handleYellowBall}
                                        handleRedBall={handleRedBall}
                                        handleLastBall={handleLastBall}
                                        setReverce={setReverce}
                                        saveAvers={saveAvers}
                                        saveReverce={saveReverce}
                                        isReverce={game.isReverce}
                                        players={game.players}
                                        setPage={setPage}
                                        gameOverMessage={gameOverMessage}
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
                                {/* <button className="css-button">Откатить ход</button> */}
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
                                    return it.ball == 'bull'
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
                                                <div className={['css-log-ball'].join(' ')}>{it.message}</div>
                                            </div>
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="css-footer">
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        handleBall(playerId, points, itWasRed, playerName, itWasLast, lastBallPoints, itWasWhite) {
            console.log('handleBall', itWasLast)
            console.log('handleBall', lastBallPoints)
            dispatch(setBall(playerId, points, itWasRed, playerName, itWasLast, lastBallPoints, itWasWhite))
        },
        handleBull(config) {
            dispatch(setBull(config))
        },
        handleWhiteBall(config) {
            dispatch(setWhite(config))
        },
        handleYellowBall(config) {
            dispatch(setYellow(config))
        },
        handleRedBall(config) {
            dispatch(setRed(config))
        },
        handleLastBall(config) {
            dispatch(setLast(config))
        },
        setReverce() {
            dispatch(stratReverce())
        },
        saveAvers() {
            dispatch(setAvers())
        },
        saveReverce() {
            dispatch(setReverce())
        },
        gameOverMessage(){
            dispatch(setGameOverMessage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);