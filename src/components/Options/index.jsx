import React from 'react';
import Players from "./Players/index.jsx"
import StartOptions from "./StartOptions/index.jsx"
import { connect } from 'react-redux';
import { addNewPlayer,
        removePlayer,
        setPlayerName,
        setOption,
        setStoreValue,
        setBallPrice
     } from './Actions/actions';

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    showStartOptionsList(validation) {
        this.props.setValidation(validation);
        if (validation.length == 0){
            this.props.setOverlay();
        }
    }
    validateNames(players) {
        let messages = [];
        players.forEach(player => {
            if(player.name == '') messages.push("ERR!!    ВВЕДИТЕ ИМЯ");
            if(player.name != '' && player.name.length < 3) messages.push("ERR!! ИМЯ ДОЛЖНО СОДЕРЖАТЬ МИНИМУМ 3 СИМВОЛА");
        });
        return [... new Set(messages)];
    }
    render() {
        const {
            players,
            validationMessages,
            withReverce,
            payAll,
            isRandom,
            withRed,
            redPoints,
            yellowPoints,
            lastBallByCost,
            customBallPrice,
            lastBall,
            ballPrice,
            

            setValue,
            setPage,
            setPrice,
            selectOption,
            addPlayer,
            deletePlayer,
            setName,
            setOverlay,
            unsetOverlay,
            setValidation,
            clearValidation
        } = this.props;
        const validation = this.validateNames(players);
        return (
            <div className="css-options componentContainer">
                <div className="css-600pxContainer options">
                    <div className="css-players-list">
                        <Players
                            players={players}
                            addPlayer={addPlayer}
                            deletePlayer={deletePlayer}
                            setName={setName}
                            validationMessages={validationMessages}
                            clearValidation = {clearValidation}
                        />
                    </div>
                    <div className="css-start-options-list">
                        <StartOptions
                            selectOption={selectOption}
                            setPrice={setPrice}
                            withReverce={withReverce}
                            payAll={payAll}
                            isRandom={isRandom}
                            withRed={withRed}
                            redPoints={redPoints}
                            yellowPoints={yellowPoints}
                            lastBall={lastBall}
                            ballPrice={ballPrice}
                            setValue={setValue}
                            playersNum={players.length}
                            lastBallByCost={lastBallByCost}
                            customBallPrice={customBallPrice}
                        />
                    </div>
                </div>
                <div className="css-controls">
                    <button className='css-button' onClick={setPage.bind(this, 'Rules')}>Правила</button>
                    <button className='css-button' onClick={this.showStartOptionsList.bind(this, validation)}>Старт</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.options;
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer() {
            dispatch(addNewPlayer())
        },
        deletePlayer(id) {
            dispatch(removePlayer(id))
        },
        setName(event) {
            dispatch(setPlayerName(event))
        },



        selectOption(key, value) {
            dispatch(setOption(key, value))
        },
        setValue(key, event){
            dispatch(setStoreValue(key, event))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Options);