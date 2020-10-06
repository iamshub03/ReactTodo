import React from 'react';

const taskcard = (props) => {
    return(
        <div className="task-card">
            <input type="checkbox" name="input-box" checked={props.status} onChange={props.checkedHandler}/>
            {
                props.status===true?<label style={{textDecoration:"line-through"}}>
                {props.name}</label>:<label> {props.name}</label>
            }
            <button onClick={props.deleteBtn}> X </button>
        </div>
    )
}

export default taskcard;