import React, { Component } from 'react';

import styles from './Button.css';

import buttonimage from '../../multidimensionalmeditator.png';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return(
      <div className={styles.Button}>
          <img src={buttonimage} width='83px' height='83px' onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Button;
