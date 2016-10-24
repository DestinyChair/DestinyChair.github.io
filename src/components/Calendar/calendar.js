import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { bindActionCreators } from 'redux';

import Days from './calendar-display/days';
import Weekdays from './calendar-display/weekdays';
import MonthYear from './calendar-display/monthyear';
import PrevMonth from './prevmonth';
import NextMonth from './nextmonth';

class Calendar extends Component {
    constructor() {
        super();

        this.selectTicket = this.selectTicket.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    selectTicket(ticket) {
        this.props.selectTicket(ticket);
    }

    nextMonth() {
        if(this.props.date!=null){
            this.props.nextMonth(new Date(this.props.date.setMonth(this.props.date.getMonth()+1)));
        }
    }
    
    prevMonth() {
        var init_date = new Date();
        
        if((this.props.date!=null)&&(+this.props.date>+init_date)){
            this.props.prevMonth(new Date(this.props.date.setMonth(this.props.date.getMonth()-1)));
        }
    }

    render() {
        return (
            <div className='calendar'>
                <div className='cal-header'>
                    <MonthYear 
                        date={this.props.date}
                        prevMonth={this.prevMonth}
                        nextMonth={this.nextMonth}/>
                    <Weekdays />
                </div>
                <div className='cal-body'>
                    <div className='prev-month-wrapper'>
                        <PrevMonth 
                            date={this.props.date}
                            prevMonth={this.prevMonth}/>
                    </div>

                    <Days
                        date={this.props.date}
                        tickets={this.props.tickets}
                        selectTicket={this.selectTicket}/>

                    <div className='next-month-wrapper'>
                        <NextMonth 
                            date={this.props.date}
                            nextMonth={this.nextMonth}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(Calendar);