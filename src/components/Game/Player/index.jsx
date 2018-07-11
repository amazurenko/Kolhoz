import React from 'react';
import img from '../../../media/bull.svg'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                isOverlayRed: false,
                isOverlayLast: false,
                reverceOverlay: false
            };
    };
    getClass() {
        return this.props.current > 0
            ? 'blue'
            : this.props.current == 0
                ? 'grey'
                : 'red';
    };
    getOptionsForWhite() {
        const id = this.props.id;
        return {
            playerId: id
        }
    };

    getOptionsForYellow() {
        const id = this.props.id;
        return {
            playerId: id
        }
    };
    getOptionsForRed() {
        const id = this.props.id;
        const redPoints = this.props.redPoints;
        return {
            playerId: id,
            redPoints: redPoints
        }
    };
    getOptionsForBull() {
        const id = this.props.id;
        return {
            playerId: id
        }
    };
    getOptionsForLast() {
        const id = this.props.id;
        const lastBall = this.props.lastBall;
        return {
            playerId: id,
            lastBall: lastBall
        }
    };
    handleWhiteBall() {
        if (this.props.whites == 14) {
            this.setState({ isOverlayLast: true })
        }
        this.props.handleWhiteBall(this.getOptionsForWhite());
    };
    handleLastBall() {
        this.props.handleLastBall(this.getOptionsForLast());
    };
    handleItWasLast() {
        this.setState({ isOverlayRed: true })
    };
    lastWhite(isYellowDroped) {
        if (isYellowDroped) this.props.handleYellowBall(this.getOptionsForYellow());
        if (this.props.withRed) {
            this.setState({ isOverlayLast: false })
        } else {
            this.props.handleLastBall(this.getOptionsForLast());
            if (this.props.withReverce) {
                this.setState({ reverceOverlay: true })
                this.setState({ isOverlayLast: false })
                console.log('this.props.players', this.props.players);
                this.props.saveAvers(this.props.players);
            }
        }
    };
    lastRed(isYellowDroped) {
        if (isYellowDroped) this.props.handleYellowBall(this.getOptionsForYellow());
        this.props.handleLastBall(this.getOptionsForLast());
        this.setState({ isOverlayRed: false })
        if (this.props.withReverce) this.setState({ reverceOverlay: true })
    };
    stratReverce(isReverceAccept) {
        if (isReverceAccept) {
            // this.props.saveAvers();
            if(!this.props.isReverce)this.props.setReverce()
            this.setState({ reverceOverlay: false });
        } else {
            console.log('Showed game over Page')
        }
    }
    render() {
        const {
            id,
            name,
            position,
            current,
            ballPrice,
            withRed,
            redPoints,
            customBallPrice,
            lastBall,
            isWhitesAre,
            lastBallByCost,
            whites,
            withReverce,
            isReverce,
            players,

            handleBall,
            handleWhiteBall,
            handleYellowBall,
            handleRedBall,
            handleLastBall,
            handleBull,
            setReverce,
            saveAvers
        } = this.props;
        return (
            <div className="css-player">
                {this.state.isOverlayLast ? <div className="css-overlay Last">
                    <div className="css-over-title">Был сыгран последний белый.</div>
                    <div className="css-over-title">Биток упал?</div>
                    <div className="css-over-controls">
                        <button className='css-button' onClick={this.lastWhite.bind(this, true)}>Да</button>
                        <button className='css-button' onClick={this.lastWhite.bind(this, false)}>Нет</button>
                    </div>
                </div> : null}
                {this.state.isOverlayRed ? <div className="css-overlay Red">
                    <div className="css-over-title">Был забит последний шар (красный).</div>
                    <div className="css-over-title">Биток упал?</div>
                    <div className="css-over-controls">
                        <button className='css-button' onClick={this.lastRed.bind(this, true)}>Да</button>
                        <button className='css-button' onClick={this.lastRed.bind(this, false)}>Нет</button>
                    </div>
                </div> : null}
                {this.state.reverceOverlay && withReverce ? <div className="css-overlay Reverce">
                    <div className="css-over-title">Начать реверс?</div>
                    <div className="css-over-controls">
                        <button className='css-button' onClick={this.stratReverce.bind(this, true)}>Да</button>
                        <button className='css-button' onClick={this.stratReverce.bind(this, false)}>Нет</button>
                    </div>
                </div> : null}
                <div className="css-player-bar">
                    <div className="css-name">{`${name}:`}</div>
                    <div className={["css-current", this.getClass()].join(' ')}>{current}</div>
                    <div className="css-white">
                        <button
                            className={["css-button", isWhitesAre ? '' : "dis"].join(' ')}
                            onClick={this.handleWhiteBall.bind(this)}
                            disabled={!isWhitesAre}
                        >+</button>
                    </div>

                    <div className="css-add">
                        <button
                            className={["css-button", isWhitesAre ? '' : "dis"].join(' ')}
                            onClick={handleYellowBall.bind(this, this.getOptionsForYellow())}
                            disabled={!isWhitesAre}
                        >+</button>
                    </div>
                    {withRed
                        ? (
                            <div className="css-double">
                                <button className="css-button" onClick={handleRedBall.bind(this, this.getOptionsForRed())}>+</button>
                            </div>
                        )
                        : null}
                    <div className="css-bull-button">
                        <button
                            className={["css-button", isWhitesAre ? '' : withRed ? "" : "dis"].join(' ')}
                            onClick={handleBull.bind(this, this.getOptionsForBull())}
                            disabled={withRed ? false : !isWhitesAre}>
                            <img className='css-bull-icon' src={img} alt="" />
                        </button>
                    </div>
                    {withRed && !isWhitesAre && (<div className="css-last">
                        <button
                            className="css-button"
                            onClick={this.handleItWasLast.bind(this)}
                        >Это был последний</button>
                    </div>)}
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