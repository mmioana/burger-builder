import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    return (
        <Auxiliary>
            <h2>Your Order Details</h2>
            <p>An amazingly delicious burger with the following ingredients:</p>
            <ul>
                {Object.keys(props.ingredients).map((ingKey) => {
                    return (<li key={ingKey}>
                                <span
                                    style={{textTransform: 'capitalize'}}>{ingKey}</span>
                                : {props.ingredients[ingKey]}
                            </li>);
                })}
            </ul>
            <p>Continue to checkout?</p>
            <Button
                clicked={props.cancel}
                btnType='Danger'>Cancel</Button>
            <Button
                clicked={props.continue}
                btnType='Success'>Continue</Button>
        </Auxiliary>
    );
};

export default orderSummary;