import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.playAgain = this.playAgain.bind(this);
  }

  playAgain() {
    const { history } = this.props;
    history.push('/');
  }

  renderFeedBack() {
    const storageUser = JSON.parse(localStorage.getItem('state'));
    const { player: { assertions } } = storageUser;
    if (assertions <= 0) {
      return (
        <>
          <h3 data-testid="feedback-total-question">
            {assertions}
          </h3>
          <h3>Não acertou nenhuma pergunta</h3>
        </>
      );
    }
    return (
      <>
        <h3>Acertou</h3>
        <h3 data-testid="feedback-total-question">
          {assertions}
        </h3>
        <h3>perguntas</h3>
      </>
    );
  }

  render() {
    const NUMBER = 3;
    const msgCool = 'Mandou bem!';
    const msgBad = 'Podia ser melhor...';
    const storageUser = JSON.parse(localStorage.getItem('state'));
    const { player: { assertions, score } } = storageUser;
    console.log(assertions, score);

    return (
      <div>
        <Header />
        <h3 data-testid="feedback-text">{ assertions < NUMBER ? msgBad : msgCool }</h3>
        { this.renderFeedBack() }
        <p data-testid="feedback-total-score">{`Um total de ${score} pontos`}</p>
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
