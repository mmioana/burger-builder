import React, {Component} from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Auxiliary>
                <Burger/>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;