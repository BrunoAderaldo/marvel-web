import React, { Component } from 'react';
import './HeroContent.css';

class HeroContent extends Component {
  render() {
    const { name, description } = this.props;

    return (
      <div className="hero-content">
        <h2 className="hero-name is-size-3">{name}</h2>
        <p className="hero-description is-size-5">{ description || 'no description provided' }</p>
      </div>
    );
  }
}

export default HeroContent;
