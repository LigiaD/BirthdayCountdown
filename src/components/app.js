import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';

import moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      startDate: moment()
    }
  }

  handleChange = function(date) {
    console.log('APP JS HANDLE CHANGE',date._d);
    this.setState({
        startDate: date
     });
}.bind(this)


  handleGenerate = function() {
    this.setState({ active: true})

    var CountdownDate = this.state.startDate.toDate().getTime();
    var x = setInterval(function() {

    // Get todays date and time
      var now = new Date().getTime();
    // Find the distance between now and the countdown date
      var distance = CountdownDate - now;

    // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Map.floor((distance % (1000 * 60)) / 1000);

    // Out the result in an element with id="demo"

      const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      console.log(time)

      // If the countdown is over, write some text
      if (distance < 0) {
          clearInterval(x);
          
      }
    }, 1000);
  }.bind(this)

  renderItems = function () {
    if(this.state.active){
      return[
        <Clock/>,
        ChangeDate('Change Date', () => this.setState({ active: false})),
        LargeText('03/04'),
        <label className="grid__remaining">Remaining until your 19th birthday</label>
        
      ]
    } else {
      return[
        <Picker callback={(date) => this.handleChange(date)}/>,
       Button('Generate Countdown', () => this.setState({ active: true})) 
      ] 
    }
  }.bind(this)
  render() {
    
    return (
      <div className="grid">
      <div className="grid__title">Birthday Countdown</div>
      <div className="grid__skew-dark-box"></div>
      <div className="grid__skew-dark-two"></div>
      <div className="grid__skew-dark-three"></div>

      <div className="grid__skew-light-one"> </div>
      <div className="grid__skew-light-two"> </div>
      <div className="grid__skew-light-three-box"> </div>
        
        { this.renderItems() }
        
        
      </div>
    );
  }
}
