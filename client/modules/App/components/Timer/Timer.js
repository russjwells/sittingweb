import React, { Component } from 'react';
import styles from './Timer.css';



class Timer extends Component {
  constructor(props){
    super(props);
  }
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  render() {
    let renderMin;
    let renderSec;
    renderMin = this.pad(this.props.minutes, 2);
    renderSec = this.pad(this.props.seconds, 2);
    return(
      <div className={styles.Timer}>
      {renderMin}
      :
      {renderSec}
      </div>
    );
  }
}

export default Timer;
