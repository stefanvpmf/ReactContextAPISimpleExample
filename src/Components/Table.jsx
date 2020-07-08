import React from 'react';
import DataRow from './RowData';
import Consumer from './TimesheetContext';

const MainTable =  () => {
    return (
        <Consumer>
            {context => {
                return (
                    <div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <span>Description</span>
                            </div>
                            <div>
                                <span>Amount</span>
                            </div>
                            <div>
                                <span>Actions</span>
                            </div>
                        </div>
                        {
                            context.rows.map(row => (
                                <DataRow
                                    key={row.id}
                                    rowdata={row}
                                />
                            ))
                        }
                    </div>
                )
            }}
        </Consumer>
    )

}

export default MainTable;