import React, { Component } from 'react';
import MessageDisplay from '.././MessageDisplay/MessageDisplay';
import Timer from '.././Timer/Timer';
import Button from '.././Button/Button';

import styles from './MeditationView.css';

class MeditationView extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state={
      appState: "Beginning",
      currentMin: this.props.defaultMinutes,
      currentSec: this.props.defaultSeconds
    };
  }
  tick() {
    if (this.state.appState == "Running") {
      if (this.state.currentSec>0){
        this.setState({
          currentSec: this.state.currentSec - 1
        });
      } else if (this.state.currentMin>0 && this.state.currentSec == 0) {
        this.setState({
          currentMin: this.state.currentMin - 1
        });
        this.setState({
          currentSec: 59
        });
      } else {
        console.log("all tests fail");
        console.log(this.state.currentMin>0 && this.state.currentSec == 0);
      }
    } else {
      console.log("Timer is paused");
    }
    console.log("tick: " + this.state.currentMin + ":" + this.state.currentSec);
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnMount(){
    clearInterval(this.interval);
  }
  handleButtonClick(){
    this.setState({appState: stateMapper[this.state.appState]});
    console.log(this.state.appState);
  }
  reset() {

  }
  complete() {

  }
  halfway() {

  }
  render() {
    return (
      <div className={styles.MeditationView}>
        <MessageDisplay
          appState={this.state.appState}
        />
        <Timer
          minutes={this.state.currentMin}
          seconds={this.state.currentSec}
        />
        <Button
          appState={this.state.appState}
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

var stateMapper = {
  'Beginning' : 'Running',
  'Running' : 'Paused',
  'Paused' : 'Running',
  'Finished' : 'Beginning',
  'Resetting' : 'Beginning',
}

export default MeditationView;
