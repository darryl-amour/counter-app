import React from 'react';

const Reset = (props) => (
    <div>
        <button id="reset" 
        className="button" 
        onClick={props.handleReset} >Reset</button>
    </div>

);

export default Reset;