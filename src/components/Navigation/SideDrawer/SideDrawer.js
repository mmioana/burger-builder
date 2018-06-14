import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer];

    if (props.open) {
        attachedClasses.push(classes.Open);
    } else {
        attachedClasses.push(classes.Close);
    }

    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;