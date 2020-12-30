import React from 'react';
import withCounter from './WithCounter';

const Counter = props => (
    <div>
        <div> Current count: {props.count} </div>
        <div>
            <button onClick={props.onDecrease}>-</button>
            <button onClick={props.onINcrease}>+</button>
        </div>
    </div>
)

export default withCounter(Counter);