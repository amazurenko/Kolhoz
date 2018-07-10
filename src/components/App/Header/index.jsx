import React from 'react';
import {connect} from 'react-redux';
import logo from '../../../media/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { currentPage, markerName } = this.props;
        return (
            <div className="css-header">
                <div className="css-logo">
                    <img className='css-loog-image' src={logo} alt="" />
                </div>
                <div className="css-header-content">
                    <div className="css-header-info">
                        {currentPage == "Game" && (
                            <div className="css-marker-container">
                                <div className="css-marker-title">Маркёр:</div>
                                <div className="css-marker-value">{markerName}</div>
                            </div>
                        )}
                    </div>
                    <div className="css-navigation"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.app.currentPage,
        markerName: state.options.markerName
    }
}

export default connect(mapStateToProps)(Header);