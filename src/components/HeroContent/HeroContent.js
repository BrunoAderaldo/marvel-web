import React, { Component } from 'react';
import './HeroContent.css';

class HeroContent extends Component {
  render() {
    const { name, description } = this.props;

    return (
      <div className="hero-content">
        <h2 className="hero-name">{name}</h2>
        <p className="hero-description">{description}</p>
      </div>
    );
  }
}

export default HeroContent;
