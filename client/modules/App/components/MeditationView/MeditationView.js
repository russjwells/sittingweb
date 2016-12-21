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
      appState: "Beginning"
    };
  }
  handleButtonClick(){
    console.log('hahahah');
    this.setState({appState: "Running"});
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
          appState={this.props.appState}
        />
        <Timer
          minutes={this.props.defaultMinutes}
          seconds={this.props.defaultSeconds}
        />
        <Button
          appState={this.state.appState}
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default MeditationView;
