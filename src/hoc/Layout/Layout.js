import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState, props) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;