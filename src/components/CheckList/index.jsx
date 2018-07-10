import React from 'react';
import { connect } from 'react-redux';
import { getStartupData } from './selectors';
import { setPlayerList } from '../Game/Actions/actions';


class CheckList extends React.Component {

    handleStart(page) {
        let players = this.props.players.map((player) => {
            return {
                id: player.id,
                name: player.name,
                position: Math.floor(Math.random() * 10001),
                current: 0,
                bull: 0,
                totalWhites:0,
                totalReds: 0,
                totalYellows: 0,
                tottalBulls: 0
            }
        })
        if (this.props.isRandom) {
            players.sort((a,b) => a.position - b.position)
        }
        this.props.setPlayers(players);
        this.props.unsetOverlay();
        this.props.setPage(page);
    }
    render() {
        const {
            players,
            startupData,
            withReverce,
            payAll,
            isRandom,
            withRed,
            redPoints,
            lastBallByCost,
            lastBall,
            customBallPrice,
            ballPrice,

            unsetOverlay,
            setPage
        } = this.props;
        return (
            <div className="css-checkList">
                <div className='css-list'>
                    <div className="css-body">
                        <div className="css-players">
                            <div className="css-title">
                                <div className='css-num'>{players.length}</div>
                            </div>
                            <div className="css-items">
                                {
                                    players.map((payer, index) => <div key={index} className='css-item'>{payer.name}</div>)
                                }
                            </div>
                        </div>

                        <div className="css-start-options">
                            <div className="css-title">
                                Условия:
                            </div>
                            <div className="css-items">
                                <div className="css-item">
                                    {withReverce ? 'C реверсом' : 'Без реверса'}
                                </div>
                                <div className="css-item">
                                    {payAll ? 'Свет на всех' : 'Платят минусовые'}
                                </div>
                                <div className="css-item">
                                    {isRandom ? 'Автожеребьевка' : 'Без жеребьевки'}
                                </div>
                                <div className="css-item">
                                    {withRed ? `С красным. Красный за ${redPoints}` : 'Игра c одним цветным'}
                                </div>
                                <div className="css-item">
                                    {lastBallByCost ? `Последний за ${withRed ? redPoints : 1}` : `Последний за ${lastBall}`}
                                </div>
                                <div className="css-item">
                                    {customBallPrice ? `Играем по  ${ballPrice} за шарик` : `Цена за шар не указана.`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="css-footer">
                        <div className="css-footer-controls">
                            <div className="css-button cancel" onClick={unsetOverlay}>Назад</div>
                            <div className="css-button start"  onClick={this.handleStart.bind(this, 'Game')}>Старт</div>
                        </div>
                    </div>
                </div>
                <div className="css-overlay"></div>
            </div>
        )
    }
}

const mapStateToProps = getStartupData;
const mapDispatchToProps = (dispatch) => {
    return {
        setPlayers(list){
            dispatch(setPlayerList(list))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);