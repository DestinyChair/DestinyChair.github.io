import React, { Component } from 'react';

export default class Weekdays extends Component {
    renderList() {
        var weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

        //each day as <li>
        return weekdays.map((day) => {
            return (
                <li
                    key={day}
                    className='week'>
                    {day}
                </li>
            );
        });
    }

    render() {
        return (
            <div className='week-wrapper'>
                {this.renderList()}
            </div>
        );
    }
}