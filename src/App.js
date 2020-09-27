import * as React from "react";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import Menu from './components/Menu/Menu';
import actions from './store/actions';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header menuHandler={() => this.props.toggleMenu()}/>
                <Menu/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpen: state.menuStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu : () => dispatch({type: actions.TOGGLE_MENU})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
