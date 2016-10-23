import React, { Component } from 'react';
import Calendar from './Calendar/calendar';
import Info from './Info/info';

export default class App extends Component {
  render() {
    return (
      <div>
        <Calendar />

        <Info />
      </div>
    );
  }
}
