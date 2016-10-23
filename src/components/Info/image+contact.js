import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageContact extends Component {
    render() {
        //handles when nothing is selected when page initially loads
        if (!this.props.ticket) {
            return <div className='initial_info'>Select a highlighted date to see details of that days game!</div>;
        }

        //
        //TICKET NAMING CONVENTION
        //##month##daysection.jpg, a game jan 2nd in section 300 = 0102300.jpg
        //a game nov 9th in section 215 = 1109215.jpg
        //

        var ticket_path = this.getFileName();

        return (
            <div className='imagecontact-wrapper'>
                <div className='image-header'>
                    <div className='image-wrapper'>
                        <img className='image' src='../../../images/arena/section_map.jpg'/>
                    </div>
                    <div className='image-wrapper'>
                        <img className='image' src={ticket_path} alt='no img'/>
                    </div>
                </div>
                <div className='contact-wrapper'>
                    <div className='details'>Bell Center: 1909 Ave des Canadiens-de-Montréal, Montréal, QC H4B 5G0</div>
                    <div className='details'>Phone: 819-321-5053 | Email: pierlou_s@hotmail.com</div>
                </div>
            </div>
        );
    }

    getFileName(){
        var day = this.props.ticket.day;
        var month = this.props.ticket.month;
        var sections = this.props.ticket.section;
        var file = '../../TICKETS+PHOTOS/tickets/';

        if(day>9){
            var pday = day.toString();
        }else{
            var pday = '0'+day.toString();
        }

        if(month>9){
            var pmonth = (month+1).toString();
        }else{
            var pmonth = '0'+(month+1).toString();
        }
        file += pmonth+pday;

        //only uses one photo per game despite multiple sections
        //this is to allow taking only 1 photo of a game with multiple tickets available
        var i=0;
        do{
            if(this.fileExists(file+sections[i].toString()+'.jpg')){
                file += sections[i].toString()+'.jpg';
            }
            i++;
        }while(file=='../../TICKETS+PHOTOS/tickets/');
        return file;
    }

    //returns true if file exists, false otherwise
    fileExists(path){
        var check = new XMLHttpRequest();
        check.open('GET', path, true);
        if(check.status!=404){
            check.send();
            return true;
        }
        return false;
    }
}

function mapStateToProps(state) {
  return {
    ticket: state.activeTicket
  };
}

export default connect(mapStateToProps)(ImageContact);