import React from 'react';

const navbar = (props) => {
    return (
        <div className="nav-bar">
            <ul>
                <li>HOME</li>
                <li>DAILY TASK MANAGER</li>
                <li id="clear-btn" onClick={props.clearBtn}>CLEAR</li>
            </ul>
        </div>
    )
}

export default navbar;