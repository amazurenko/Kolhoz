import React from 'react';
import { connect } from 'react-redux';
import Rules from "../Rules/index.jsx"
import Options from "../Options/index.jsx"
import CheckList from "../CheckList/index.jsx"
import Game from "../Game/index.jsx"

import { 
    setNewPage,
    activateOverlay,
    deactivateOverlay,
    setValidationMessages,
    clearValidationMessages } from './actions/actions';


class App extends React.Component {
    getComponent (componentKey) {
        switch(componentKey) {
            case "Rules":
                return Rules;
            case "Options":
                return Options;
            case "Game":
                return Game;
            default:
                return;
        }
    }
    render(){
        const { currentPage, isOverlay } = this.props;
        const CustomComponent = this.getComponent(currentPage);
        return (
                <div className='css-app'>
                                <div className="css-header">
                    <div className="css-logo">
                        <div className="css-logo-label">
                            K@Z
                        </div>
                    </div>
                    <div className="css-navigation">

                    </div>
                </div>
                    <CustomComponent {...this.props} />
                    {
                        isOverlay && (<CheckList {...this.props}/>)
                    }
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.app;
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPage(newPage) {
            dispatch(setNewPage(newPage))
        },
        setOverlay(){
            dispatch(activateOverlay())
        },
        unsetOverlay(){
            dispatch(deactivateOverlay())
        },
        setValidation(validationMessages){
            dispatch(setValidationMessages(validationMessages))
        },
        clearValidation(){
            dispatch(clearValidationMessages())
        }

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(App);