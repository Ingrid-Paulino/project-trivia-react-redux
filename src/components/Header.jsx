import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, score } = this.props;
    return (
      <>
        <img src="" alt="imagem" data-testid="header-profile-picture" />
        <div>
          <p data-testid="header-player-name">
            { name }
          </p>
          <p data-testid="header-score">
            { score }
          </p>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  score: state.user.score,
});

export default connect(mapStateToProps, null)(Header);
