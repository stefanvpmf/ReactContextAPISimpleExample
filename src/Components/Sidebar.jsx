import React from 'react';
import Consumer from './TimesheetContext';

const Sidebar = (props) => {

    return (
        <Consumer>
            {context => {
                return (
                    <div>
                        <h2>Sidebar data:</h2>
                        <label>Total amount sum: {context.sum}</label>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default Sidebar;