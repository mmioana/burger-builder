import React, {Component} from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.35,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ingredients : {
                salad: 0,
                cheese: 0,
                bacon: 0,
                meat: 0
            },
            totalPrice: 0
        };
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedIngredientCount = oldIngredientCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredientCount;

        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        if (oldIngredientCount <= 0) {
            return;
        }

        const updatedIngredientCount = oldIngredientCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredientCount;

        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
    }

    render() {

        const disabledInfo = {...this.state.ingredients};

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    disabled={disabledInfo}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;