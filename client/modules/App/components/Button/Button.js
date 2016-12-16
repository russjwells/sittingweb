import React, { Component } from 'react';

import styles from './Button.css';

import buttonimage from '../../multidimensionalmeditator.png';

class Button extends Component {
  handleButtonClick(){
    
  }
  render() {
    return(
      <div className={styles.Button}>
        <img src={buttonimage} width='83px' height='83px' />
      </div>
    );
  }
}

export default Button;
