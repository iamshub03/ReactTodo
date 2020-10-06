import React from 'react';

const input = (props) => {
    return(
        <div className="input-form">
            <input id="in_form" type="text" placeholder="Enter task - homework, study, ..." onKeyPress={props.keyPress}/>
            <button onClick={props.addBtn}> ADD </button>
        </div>
    )
}

export default input;