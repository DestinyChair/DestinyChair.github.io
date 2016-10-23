import React, { Component } from 'react';
import ImageContact from './image+contact';
import Details from './details';

export default class Info extends Component {    
    render() {
        return (
            <div className='info-container'>
                <Details />
                <ImageContact />
            </div>
        );
    }
}