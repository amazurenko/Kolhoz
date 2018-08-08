import React from 'react';
import remove from '../../../media/remove.svg';
import add from '../../../media/add.svg';

class StartOptions extends React.Component {
    constructor(props) {
        super(props);
        this.last = React.createRef();
        this.price = React.createRef();
        this.red = React.createRef();
        this.state =
            {
                playerListIsVisible: false
            };
    }
    showPlayerList() {
        this.setState({ playerListIsVisible: true })
    }
    hidePlayerList() {
        this.setState({ playerListIsVisible: false })
    }
    selectMarker(event) {
        this.props.setMarkerName(event);
        this.hidePlayerList();
    }
    render() {
        const {
            playersNum,
            withReverce,
            lastBallByCost,
            customBallPrice,
            payAll,
            isRandom,
            withRed,
            redPoints,
            yellowPoints,
            lastBall,
            ballPrice,
            players,
            markerName,

            setValue,
            setMarkerName,
            selectOption,
            increaseRedPoints,
            reduceRedPoints,
            reduceLastBallPrice,
            increaseLastBallPrice,
            reduceBallPrice,
            increaseBallPrice } = this.props;
        return (
            <div className="css-start-options">
                <div className="css-marker">
                    <div className="css-marker-title">Маркёр:</div>
                    <div className="css-marker-name">
                        <input
                            className='css-text-input'
                            type="text"
                            value={markerName}
                            list='players'
                            placeholder='Сегодня маркёрит...'
                            onChange={setMarkerName}
                            onKeyDown={this.hidePlayerList.bind(this)}
                            onFocus={this.showPlayerList.bind(this)} />
                        <div id="players" className={['css-datalist', this.state.playerListIsVisible ? 'visible' : ''].join(' ')}>
                            <button onClick={this.hidePlayerList.bind(this)}>X</button>
                            {players.map(it => (
                                <option
                                    className='css-datalist-option'
                                    key={it.id}
                                    onClick={this.selectMarker.bind(this)}>
                                    {it.name}
                                </option>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='css-start-option Reverce'>
                    <div className="css-start-option-label">Реверс:</div>
                    <div className="css-start-option-content">
                        <div
                            className={['css-start-option-content-item', withReverce ? 'selected' : ''].join(' ')}
                            onClick={selectOption.bind(this, 'withReverce', true)}
                        >
                            С реверсом
                        </div>
                        <div
                            className={['css-start-option-content-item', withReverce ? '' : 'selected'].join(' ')}
                            onClick={selectOption.bind(this, 'withReverce', false)}
                        >
                            Без реверса
                        </div>
                    </div>
                </div>
                <div className='css-start-option Payment'>
                    <div className="css-start-option-label">Оплата света:</div>
                    <div className="css-start-option-content">
                        <div className={['css-start-option-content-item', payAll ? '' : 'selected'].join(' ')}
                            onClick={selectOption.bind(this, 'payAll', false)}>Только минусовые</div>
                        <div className={['css-start-option-content-item', payAll ? 'selected' : ''].join(' ')}
                            onClick={selectOption.bind(this, 'payAll', true)}>Свет на всех</div>
                    </div>
                </div>
                <div className='css-start-option Random'>
                    <div className="css-start-option-label">Жеребьевка:</div>
                    <div className="css-start-option-content">
                        <div className={['css-start-option-content-item', isRandom ? 'selected' : ''].join(' ')}
                            onClick={selectOption.bind(this, 'isRandom', true)}>Случайный порядок</div>
                        <div className={['css-start-option-content-item', isRandom ? '' : 'selected'].join(' ')}
                            onClick={selectOption.bind(this, 'isRandom', false)}>В порядке ввода имен</div>
                    </div>
                </div>





                <div className='css-start-option withRed'>
                    <div className="css-start-option-label">Игра с красным?</div>
                    <div className="css-start-option-content">

                        <div className={['css-start-option-content-item', withRed ? '' : 'selected'].join(' ')}
                            onClick={selectOption.bind(this, 'withRed', false)}>
                            Только желтый
                        </div>
                        <div className={['css-start-option-content-item', withRed ? 'selected' : ''].join(' ')}
                            onClick={selectOption.bind(this, 'withRed', true)}>
                            С красным
                        </div>
                        {
                            withRed &&
                            <div className="css-set-container">
                                <div>Красный за:</div>
                                <img className='css-controll-button' src={remove} alt="" onClick={reduceRedPoints} />
                                <div className='css-css-Ovalue-value'>{redPoints}</div>
                                <img className='css-controll-button' src={add} alt="" onClick={increaseRedPoints} />
                            </div>
                        }
                    </div>
                </div>







                <div className='css-start-option lastBall'>
                    <div className="css-start-option-label">Последний шар за:</div>
                    <div className="css-start-option-content">
                        <div className={['css-start-option-content-item', lastBallByCost ? 'selected' : ''].join(' ')}
                            onClick={selectOption.bind(this, 'lastBallByCost', true)}>
                            Стоимость шара
                        </div>
                        <div className={['css-start-option-content-item', lastBallByCost ? '' : 'selected'].join(' ')}
                            onClick={selectOption.bind(this, 'lastBallByCost', false)}>
                            Установить
                        </div>
                        {
                            !lastBallByCost &&
                            <div className="css-set-container">
                                <div>Последний за:</div>
                                <img className='css-controll-button' src={remove} alt="" onClick={reduceLastBallPrice} />
                                <div className='css-css-Ovalue-value'>{lastBall}</div>
                                <img className='css-controll-button' src={add} alt="" onClick={increaseLastBallPrice} />
                            </div>
                        }
                    </div>
                </div>




                <div className='css-start-option ballPrice'>
                    <div className="css-start-option-label">Цена шара:</div>
                    <div className="css-start-option-content">
                        <div className={['css-start-option-content-item', customBallPrice ? '' : 'selected'].join(' ')}
                            onClick={selectOption.bind(this, 'customBallPrice', false)}>
                            Игра на очки
                        </div>
                        <div className={['css-start-option-content-item', customBallPrice ? 'selected' : ''].join(' ')}
                            onClick={selectOption.bind(this, 'customBallPrice', true)}>
                            Установить
                        </div>
                        {
                            customBallPrice &&
                            <div className="css-set-container">
                                <div>За шар:</div>
                                <img className='css-controll-button' src={remove} alt="" onClick={reduceBallPrice} />
                                <div className='css-css-Ovalue-value'>{ballPrice}</div>
                                <img className='css-controll-button' src={add} alt="" onClick={increaseBallPrice} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default StartOptions;