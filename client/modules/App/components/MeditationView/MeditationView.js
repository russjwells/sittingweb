import React, { Component } from 'react';
import MessageDisplay from '.././MessageDisplay/MessageDisplay';
import Timer from '.././Timer/Timer';
import Button from '.././Button/Button';

class MeditationView extends Component {
  render() {
    return (
      <div>
        <MessageDisplay />
        <Timer />
        <Button />
      </div>
    );
  }
}

export default MeditationView;
