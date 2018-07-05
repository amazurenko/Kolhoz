import React from 'react';
import img from '../../../media/bull.svg'

class Player extends React.Component {
    constructor(props) {
        super(props)
    }
    getClass() {
        return this.props.current > 0
            ? 'blue'
            : this.props.current == 0
                ? 'grey'
                : 'red';
    }
    render() {
        const { id,
            name,
            position,
            current,
            ballPrice,
            withRed,
            redPoints,
            customBallPrice,

            handleBall,
            handleBull,
            handleLast
        } = this.props;
        return (
            <div className="css-player">
                <div className="css-player-bar">
                    <div className="css-name">{`${name}:`}</div>
                    <div className={["css-current", this.getClass()].join(' ')}>{current}</div>
                    <div className="css-add">
                        <button className="css-button" onClick={handleBall.bind(this, id, 1, false, name)}>+</button>
                    </div>
                    {withRed
                    ?   (
                        <div className="css-double">
                            <button className="css-button" onClick={handleBall.bind(this, id, redPoints, true, name)}>+</button>
                        </div>
                        )
                    : null}
                    <div className="css-bull-button">
                        <button className="css-button" onClick={handleBull.bind(this, id, name)}>
                            <img className='css-bull-icon' src={img} alt=""/>
                        </button>
                    </div>
                </div>
                {customBallPrice
                    ? (<div className="css-price">
                        {current * ballPrice}
                    </div>)
                    : null}

            </div>
        )
    }
}

export default Player;