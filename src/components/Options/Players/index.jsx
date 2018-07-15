import React from 'react';
import remove from '../../../media/remove.svg';
import add from '../../../media/add.svg';
import info from '../../../media/info.svg';


// TODO: create player component



class Players extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            players,
            validationMessages,

            addPlayer,
            deletePlayer,
            setName,
            clearValidation
        } = this.props;
        const addButtonVisible = players.length < 7;
        return (
            <div className="css-players">
                <div className="css-players-controls">
                    {players.map((player) => {
                        return (
                            <div className='css-player-name' key={player.id}>
                                <input
                                    className='css-text-input'
                                    type="text"
                                    placeholder={player.placeholder || 'Имя...'}
                                    value={player.name}
                                    id={player.id}
                                    onChange={setName}
                                    onFocus={clearValidation}
                                />
                                {player.canRemove
                                    ? <div className="css-remove-container">
                                        <img className='css-remove-button' src={remove} alt="" onClick={deletePlayer.bind(this, player.id)} />
                                    </div>
                                    : null}
                            </div>
                        )
                    })}
                    {
                        addButtonVisible && (
                            <div className='css-add-player'>
                                <div className="css-add-container">
                                    <img className='css-add-button' src={add} alt="" onClick={addPlayer.bind(this)} />
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="css-players-validation">
                    {validationMessages.map((validationMessage, index) =>
                        <div className="css-validation" key={index}>
                                <div className="css-validation-icon-container">
                                    <img className='css-validation-icon' src={info} alt="" />
                                </div>
                                <div className="css-validation-text">
                                    {validationMessage}
                                </div>
                        </div>)}
                </div>

            </div>
        )
    }
}

export default Players;