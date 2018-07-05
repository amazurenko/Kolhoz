import React from 'react';


class Option extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { option } = this.props;
        return (
            <div className={['css-start-option reverce', option.class].join(' ')} key={option.id} id={option.id}>
                <div className="css-start-option-label">
                    {`${option.title}:`}
                </div>
                <div className="css-start-option-content">
                    {option.possibleValues.map((possibleValue) => (
                        <div
                            key={possibleValue.id}
                            className={['css-start-option-content-item', possibleValue.isSelected ? 'selected' : ''].join(' ')}
                            onClick={this.props.selectOption.bind(this, option.id, possibleValue.id)}
                            id={possibleValue.id}
                        >
                            {possibleValue.title}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Option;