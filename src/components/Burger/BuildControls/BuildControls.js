import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((control) => (
              <BuildControl
                  key={control.label}
                  label={control.label}
                  disabled={props.disabled[control.type]}
                  added={props.ingredientAdded.bind(this, control.type)}
                  removed={props.ingredientRemoved.bind(this, control.type)}/>
            ))}
            <button className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.purchase}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;