import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        //handles when nothing is loaded yet
        if (!this.props.ticket) {
            return <div></div>;
        }
        
        var team1 = '../../../images/logos/'+this.props.ticket.team1+'.jpg';
        var team2 = '../../../images/logos/'+this.props.ticket.team2+'.jpg';

        //handles multiple available sections
        var sections = '';
        for(var i=0;i<this.props.ticket.section.length;i++){
            if(i+1<this.props.ticket.section.length){
                sections += this.props.ticket.section[i].toString() + ', ';
            }else{
                sections += this.props.ticket.section[i].toString();
            }
        }

        return (
            <div className='detail-header'>
                <div className='logo-wrapper'>
                    <img className='logo' src={team1}/>
                    <div className='wrap'>
                        <div className='team'>{this.props.ticket.team1}</div>
                        <div className='vs'>VS</div>
                        <div className='team'>{this.props.ticket.team2}</div>
                    </div>
                    <img className='logo' src={team2}/>
                </div>
                <div className='date-wrapper'>
                    <div className='date'>{this.props.ticket.day} {month_name[this.props.ticket.month]}, {this.props.ticket.year}</div>
                </div>
                <div className='detail-wrapper'>
                    <div className='details'>Section: {sections} | Price (for a pair): {this.props.ticket.price}$</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    ticket: state.activeTicket
  };
}

export default connect(mapStateToProps)(Details);