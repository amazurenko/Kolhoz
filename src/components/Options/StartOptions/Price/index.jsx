import React from 'react';

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount(){
        this.textInput.current.focus();
    }
    render() {
        const { setPrice } = this.props;
        return (
            <div className="ball-price-container">
                <input 
                ref={this.textInput}
                className='css-text-input' 
                type="text"
                onChange = {setPrice}
                />
            </div>
        )
    }
}

export default Price;