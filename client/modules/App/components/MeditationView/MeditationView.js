import React, { Component } from 'react';
import MessageDisplay from '.././MessageDisplay/MessageDisplay';
import Timer from '.././Timer/Timer';
import Button from '.././Button/Button';

import styles from './MeditationView.css';

class MeditationView extends Component {
  constructor(props) {
    super(props);
    this.state={

    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(){
    console.log('clicked');
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
        <MessageDisplay />
        <Timer defaultMinutes={this.props.defaultMinutes} defaultSeconds={this.props.defaultSeconds}/>
        <Button />
      </div>
    );
  }
}

export default MeditationView;
