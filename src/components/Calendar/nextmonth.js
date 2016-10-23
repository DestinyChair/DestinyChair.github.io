import React, { Component } from 'react';

export default class NextMonth extends Component {
    nextMonth() {
        this.props.nextMonth();
    }

    render() {
        if(this.props.date!=null){
            return (
                <div
                    onClick={() => this.nextMonth()}
                    className='nextmonth'>
                        <p>Next month</p>
                </div>
            );
        }

        return(
            <div className='nextmonth'>
                <p>NOT LOADED</p>
            </div>
        );
    }
}