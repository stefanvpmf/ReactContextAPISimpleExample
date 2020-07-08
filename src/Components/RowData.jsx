import React, { Component } from 'react';
import Consumer from './TimesheetContext';

class RowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.rowdata
        }
    }

    onChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'number' ? Number(target.value) : target.value;
        
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Consumer>
                {context => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <form
                                style={{ display: 'flex' }}
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    context.onUpdateRow({ ...this.state });
                                }}
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name="minutes"
                                        value={this.state.minutes}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button
                                    title="Save"
                                >
                                    Save
                        </button>
                            </form>
                            <div>
                                <span>Row id is: {this.props.rowdata.id}</span>
                                <span> Is edited: {this.props.rowdata.isEdited ? "true" : "false"}</span>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default RowData;