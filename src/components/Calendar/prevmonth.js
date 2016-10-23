import React, { Component } from 'react';

export default class NextMonth extends Component {
    prevMonth() {
        this.props.prevMonth();
    }

    render() {
        var init_date = new Date();

        //default before load
        if(this.props.date==null){
            return(
                <div className='prevmonth'>
                    <p>NOT LOADED</p>
                </div>
            );
        }
        
        if(+this.props.date>+init_date){
            //allow prevmonth
            return (
                <div 
                    onClick={() => this.prevMonth()}
                    className='prevmonth'>
                        <p>Prev month</p>
                </div>
            );
        }
        //current month, no need to go back
        else{
            return (
                <div 
                    onClick={() => this.prevMonth()}
                    className='prevmonth-false'>
                        <p>Prev month</p>
                </div>
            );
        }


    }
}