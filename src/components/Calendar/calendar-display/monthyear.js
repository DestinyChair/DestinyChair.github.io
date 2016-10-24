import React, { Component } from 'react';

export default class MonthYear extends Component {
    nextMonth() {
        this.props.nextMonth();
    }

    prevMonth() {
        this.props.prevMonth();
    }
    
    render() {
        var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var prev_arrow = '';
        var init_date = new Date();
        
        if(this.props.date!=null){
            //can go back
            if(+this.props.date>+init_date){
                prev_arrow = '< ';
            }
            var month = month_name[this.props.date.getMonth()];
            var year = this.props.date.getFullYear();
        }

        return (
            <div className='monthyear-wrapper'>
                <div className='monthyear' onClick={() => this.prevMonth()}>{prev_arrow} </div>
                <div className='monthyear'>{month} | {year}</div>
                <div className='monthyear' onClick={() => this.nextMonth()}> ></div>
            </div>
        );
    }
}
