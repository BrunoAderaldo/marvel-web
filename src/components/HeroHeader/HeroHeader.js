import React, { Component } from 'react';
import './HeroHeader.css';

class HeroHeader extends Component {
  render() {
    const { image } = this.props;

    return (
      <div className="hero-header">
        <img src={image} className="hero-thumbnail" alt="thumbnail hero" />
      </div>
    );
  }
}

export default HeroHeader;
