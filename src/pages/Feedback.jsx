import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const NUMBER = 3;
    const msgCool = 'Mandou bem!';
    const msgBad = 'Podia ser melhor...';
    const storageUser = JSON.parse(localStorage.getItem('state'));
    const { player: { assertions } } = storageUser;
    return (
      <div>
        <Header />
        <h3 data-testid="feedback-text">{ assertions < NUMBER ? msgBad : msgCool }</h3>
      </div>
    );
  }
}

export default Feedback;
