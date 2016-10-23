import React, { Component } from 'react';

export default class Days extends Component {
    selectTicket(ticket) {
        this.props.selectTicket(ticket);
    }

    renderList() {
        var cur_day = new Date();
        var init_day = new Date(this.props.date.getFullYear(),this.props.date.getMonth(),1); //for day offset 

        //formatting is Mon-Sun so offset necessary to align the days
        if(init_day.getDay()==0){
            var offset = 6; //sunday
        }
        else{
            var offset = init_day.getDay()-1;
        }

        //max offset=6, max span of weeks=5, 41 is ~ the size of a 7x6 grid
        if(this.dayInMonth(this.props.date.getFullYear(),this.props.date.getMonth())+offset<36){
            var month = new Array(35);
        }
        else{
            var month = new Array(42);
        }

        //pre-offset spacing
        for(var i=0;i<offset;i++){
            month[i] = -1;
        } 
        //post-offset spacing
        for(var i=0;i<(1+month.length-offset-this.dayInMonth(this.props.date.getFullYear(),this.props.date.getMonth()));i++){
            month[month.length-i] = 1;
        }

        //sets days and gamedays
        for(var i=1;i<this.dayInMonth(this.props.date.getFullYear(),this.props.date.getMonth());i++){
            
            //checks against list of tickets
            for(var j=0;j<this.props.tickets.length;j++){
                if((i==this.props.tickets[j].day)
                    &&(this.props.tickets[j].month==this.props.date.getMonth())
                    &&(this.props.tickets[j].year==this.props.date.getFullYear())){
                        month[i+offset] = {
                            ticket: this.props.tickets[j],
                            date: new Date(this.props.date.getFullYear(),this.props.date.getMonth(),i)
                        };
                }
            }

            //if not gameday, set day
            if(month[i+offset]==null){
                month[i+offset] = new Date(this.props.date.getFullYear(),this.props.date.getMonth(),i);
            }

        }
        
        return month.map((day) => {
            //empty day pre
            if(day==-1){
                return (
                    <div className='day-wrapper'>
                        <div className='emptyday-past'/>
                    </div>
                );
            }
            
            //empty day post
            if(day==1){
                return (
                    <div className='day-wrapper'>
                        <div className='emptyday'/>
                    </div>
                );
            }
            
            //in past?
            if(+day<+cur_day){
                //gameday
                if((day.ticket!=null)&&((day.ticket.month>cur_day.getMonth())||(day.ticket.year>=cur_day.getFullYear()))){
                    return (
                        <div className='gameday-wrapper-past' onClick={() => this.selectTicket(day.ticket)}>
                            <div className='gameday'>
                                {day.date.getDate()}
                            </div>
                        </div>
                    );
                }

                //day with no ticket
                if(day.date==null){
                    return (
                        <div className='day-wrapper-past'>
                            <div className='day'>
                                {day.getDate()}
                            </div>
                        </div>
                    );
                }
                //day that had a ticket, but in the past
                else{
                    return (
                        <div className='day-wrapper-past'>
                            <div className='day'>
                                {day.date.getDate()}
                            </div>
                        </div>
                    );
                }
            }
            //present-onwards
            else{
                //gameday
                if((day.ticket!=null)&&((day.ticket.month>cur_day.getMonth())||(day.ticket.year>=cur_day.getFullYear()))){
                    return (
                        <div className='gameday-wrapper' onClick={() => this.selectTicket(day.ticket)}>
                            <div className='gameday'>
                                {day.date.getDate()}
                            </div>
                        </div>
                    );
                }

                //day with no ticket
                if(day.date==null){
                    return (
                        <div className='day-wrapper'>
                            <div className='day'>
                                {day.getDate()}
                            </div>
                        </div>
                    );
                }
                //day that had a ticket, but in the past
                else{
                    return (
                        <div className='day-wrapper'>
                            <div className='day'>
                                {day.date.getDate()}
                            </div>
                        </div>
                    );
                }
            }
        })
    }

    render() {
        return (
            <div className='day-header'>
                {this.renderList()}
            </div>
        );
    }

    dayInMonth(year, month) {
        var d = new Date(year, month+1, 0);
        return d.getDate()+1;
    }
}