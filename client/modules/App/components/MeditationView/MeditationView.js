import React, { Component } from 'react';
import MessageDisplay from '.././MessageDisplay/MessageDisplay';
import Timer from '.././Timer/Timer';
import Button from '.././Button/Button';
import styles from './MeditationView.css';

class MeditationView extends Component {
  render() {
    return (
      <div className={styles.MeditationView}>
        <MessageDisplay />
        <Timer />
        <Button />
      </div>
    );
  }
}

export default MeditationView;
