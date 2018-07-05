import React from 'react';

// TODO: create player component



class Players extends React.Component {
    constructor(props){
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
                {players.map((player) => {
                    return (
                        <div className='css-player-name' key = {player.id}>
                            <input 
                            className='css-text-input marginRight' 
                            type="text" 
                            placeholder={player.placeholder || 'Имя...'}
                            value = {player.name}
                            id = {player.id}
                            onChange = {setName}
                            onFocus = {clearValidation}
                            />
                            {player.canRemove 
                                ? <button className='css-button  removePlayer' onClick = {deletePlayer.bind(this, player.id)}>-</button> 
                                : null}
                        </div>
                    )
                })}
                {
                    addButtonVisible && (
                        <div className='css-add-player'>
                            <button className='css-button' onClick = {addPlayer}>+</button>
                        </div>
                    )
                }
                {validationMessages.map((validationMessage, index) =>  <div className="css-validation" key = {index}>{validationMessage}</div>)}
            </div>
        )
    }
}

export default Players;