import React, { Component } from 'react';

import styles from './MessageDisplay.css';

class MessageDisplay extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className={styles.MessageDisplay}>
        Begin Meditation
      </div>
    );
  }
}

export default MessageDisplay;
