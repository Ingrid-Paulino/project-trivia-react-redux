import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  constructor() {
    super();
    this.playAgain = this.playAgain.bind(this);
  }

  playAgain() {
    const { history } = this.props;
    history.push('/');
  }

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
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
        >
          Jogar novamente
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Feedback;
