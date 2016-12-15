import React, { Component } from 'react';
import styles from './Timer.css';

class Timer extends Component {
  render() {
    return(
      <div className={styles.Timer}>
        20:00
      </div>
    );
  }
}

export default Timer;
