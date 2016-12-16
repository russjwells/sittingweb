import React, { Component } from 'react';
import styles from './Timer.css';

class Timer extends Component {
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  render() {
    return(
      <div className={styles.Timer}>
        {this.props.defaultMinutes}:{this.props.defaultSeconds}
      </div>
    );
  }
}

export default Timer;
