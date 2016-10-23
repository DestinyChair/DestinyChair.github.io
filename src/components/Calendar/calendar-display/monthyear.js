import React, { Component } from 'react';
import { calendarDate } from '../../../actions/index';
import { bindActionCreators } from 'redux';

export default class MonthYear extends Component {
    constructor() {
        super();
    }

    render() {
        var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var prev_arrow = '';
        var init_date = new Date();
        
        if(this.props.month!=null){
            //can go back
            if(+this.props.month>+init_date){
                prev_arrow = '< ';
            }
            var month = month_name[this.props.month.getMonth()];
            var year = this.props.month.getFullYear();
        }

        return (
            <div className='monthyear-wrapper'>
                <span className='monthyear'>{prev_arrow} </span>
                <span className='monthyear'>{month} | {year}</span>
                <span className='monthyear'> ></span>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    calendar: state.calendarDate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ calendarDate: calendarDate }, dispatch);
}