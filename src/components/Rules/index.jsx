import React from 'react';

class Rules extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { setPage } = this.props;
        return (
            <div className="css-rules componentContainer">
                <div className="css-600pxContainer">
                    <p>Правила в разработке. А пока только Rock'n'Roll...</p>
                </div>
                <div className="css-controls">
                    <button className='css-button' onClick={setPage.bind(this, 'Options')}>Далее</button>
                </div>
            </div>
        )
    }
}

export default Rules;