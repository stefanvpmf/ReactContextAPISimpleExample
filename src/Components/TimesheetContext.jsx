import React, { Component, createContext } from 'react';
import axiosMock from '../Data/MockAxios';

const {Provider, Consumer} = createContext();

class TimesheetContext extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastModifiedId: null,
            sum: null,
            rows: []
        }
    }

    componentDidMount() {
      axiosMock.getData().then(data => { 
        this.setState({ rows: data, sum: this.sum(data)});
      })
    }

    sum = (rows) => {
      return rows.reduce((sum, row) => sum + row.minutes, 0);
    }

    onUpdateRow = (updatedRow) => {
      axiosMock.updateRow(updatedRow).then(result => {
        const newRows = [ ...this.state.rows ];
        const rowIndex = newRows.findIndex(row => row.id === updatedRow.id);
        updatedRow.isEdited = true;
        newRows.splice(rowIndex, 1, updatedRow);
        this.setState({ rows: newRows, lastModifiedId: updatedRow.id, sum: this.sum(newRows)});
    });
    }

    render() {
        return (
            <Provider
                value={{
                    rows: this.state.rows,
                    sum: this.state.sum,
                    lastModifiedId: this.state.lastModifiedId,
                    onUpdateRow: this.onUpdateRow,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { TimesheetContext };

export default Consumer;