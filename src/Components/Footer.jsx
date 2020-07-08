import React from 'react';
import Consumer from './TimesheetContext';

const Footer = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <div>
                        <span>
                            Last row updated: {context.lastModifiedId}
                        </span>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default Footer;