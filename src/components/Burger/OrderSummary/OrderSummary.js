import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

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
        </Auxiliary>
    );
};

export default orderSummary;