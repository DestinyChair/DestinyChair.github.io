import React, { Component } from 'react';

export default class Initial extends Component {
    render() {
        return (
            <div className='init-header'>
                <div className='init-wrapper'>
                    <div className='red'>Red</div><div className='init-text'>indicates a clickable day.</div>
                    <div className='init-text'>Click </div><div className='red'>next month</div><div className='init-text'> to see available games!</div>
                </div>
                <div className='init-text'>Please don't use Internet Explorer with this app!</div>
                <br/>
                <div className='contact'>Contact Pierlou Schlichtig at 819-321-5053 or pierlou_s@hotmail.com</div>
            </div>
        );
    }
}