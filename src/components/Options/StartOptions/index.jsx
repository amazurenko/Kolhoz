import React from 'react';

class StartOptions extends React.Component {
    constructor(props) {
        super(props);
        this.last = React.createRef();
        this.price = React.createRef();
        this.red = React.createRef();
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

            setValue,
            setMarkerName,
            selectOption } = this.props;
        return (
            <div className="css-start-options">
                <div className="css-marker">
                    <div className="css-marker-title">Маркёр:</div>
                    <div className="css-marker-name">
                        <input
                            className='css-text-input'
                            type="text"
                            placeholder='Сегодня маркёрит...'
                            onChange={setMarkerName} />
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
                                <div className="css-set-container-label">Красный за:</div>
                                <input className='css-text-input' type="number" ref={this.red} onChange={setValue.bind(this, 'redPoints')} value={redPoints} />
                            </div>
                        }
                    </div>
                </div>







                <div className='css-start-option lastBall'>
                    <div className="css-start-option-label">Последний шар за:</div>
                    <div className="css-start-option-content">
                        <div className={['css-start-option-content-item', lastBallByCost ? 'selected' : ''].join(' ')}
                            onClick={selectOption.bind(this, 'lastBallByCost', true)}>Стоимость шара</div>
                        <div className='css-start-option-content-item'>
                            <div className="css-set-container">
                                <div className={['css-start-option-content-item', lastBallByCost ? '' : 'selected'].join(' ')}
                                    onClick={selectOption.bind(this, 'lastBallByCost', false)}>Установить</div>
                                {!lastBallByCost &&
                                    (<input className='css-text-input'
                                        type="number"
                                        ref={this.last}
                                        onChange={setValue.bind(this, 'lastBall')}
                                        value={lastBall} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='css-start-option ballPrice'>
                    <div className="css-start-option-label">Цена шара:</div>
                    <div className="css-start-option-content">
                        <div className={['css-start-option-content-item', customBallPrice ? '' : 'selected'].join(' ')}
                            onClick={selectOption.bind(this, 'customBallPrice', false)}>Игра на очки</div>
                        <div className='css-start-option-content-item'>
                            <div className="css-set-container">
                                <div className={['css-start-option-content-item', customBallPrice ? 'selected' : ''].join(' ')}
                                    onClick={selectOption.bind(this, 'customBallPrice', true)}>Установить</div>
                                {customBallPrice &&
                                    (<input className='css-text-input'
                                        type="number"
                                        step='0.5'
                                        ref={this.price}
                                        onChange={setValue.bind(this, 'ballPrice')}
                                        value={ballPrice} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartOptions;