import React, { Component } from 'react';

import styles from './MessageDisplay.css';

class MessageDisplay extends Component {
  render() {
    return(
      <div className={styles.MessageDisplay}>
        Welcome to Meditation
      </div>
    );
  }
}

export default MessageDisplay;
