import React, { Component } from 'react';
import MessageDisplay from '.././MessageDisplay/MessageDisplay';
import Timer from '.././Timer/Timer';
import Button from '.././Button/Button';
import Sound from 'react-sound';

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
      } else if (this.state.currentMin == 0 && this.state.currentSec == 0) {
        this.complete();

      } else {
        console.log("all tests fail");
      }
    } else {
    }
  }
  componentDidMount() {

  }
  componentWillUnMount(){
    clearInterval(this.interval);
  }
  handleButtonClick(){
    switch (this.state.appState) {
      case "Beginning":
        this.setState({appState: "Running"});
        this.interval = setInterval(() => this.tick(), 1000);
        break;
      case "Running":
        this.setState({appState: stateMapper[this.state.appState]});
        break;
      case "Paused":
        this.setState({appState: stateMapper[this.state.appState]});
        break;
      case "Finished":
        this.reset();
        break;
    }
    console.log(this.state.appState);
  }
  reset() {
    this.setState({
      appState: "Beginning",
      currentMin: this.props.defaultMinutes,
      currentSec: this.props.defaultSeconds
    });
  }
  complete() {
    console.log("complete");
    this.setState({appState: "Finished"});
    clearInterval(this.interval);
  }
  halfway() {

  }
  render() {
    if (this.state.appState=="Finished"){
      return (
        <div className={styles.MeditationView}>
          <MessageDisplay
            appState={this.state.appState}
          />
          <Timer
            minutes={this.state.currentMin}
            seconds={this.state.currentSec}
            appState={this.state.appState}
          />
          <Button
            appState={this.state.appState}
            onClick={this.handleButtonClick}
          />
          <Sound url="http://www.russdigital.com/sitting/singingbowlring.wav" playStatus={Sound.status.PLAYING}/>
        </div>
      );
    } else{
      return (
        <div className={styles.MeditationView}>
          <MessageDisplay
            appState={this.state.appState}
          />
          <Timer
            minutes={this.state.currentMin}
            seconds={this.state.currentSec}
            appState={this.state.appState}
          />
          <Button
            appState={this.state.appState}
            onClick={this.handleButtonClick}
          />
        </div>
      );
    }

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
