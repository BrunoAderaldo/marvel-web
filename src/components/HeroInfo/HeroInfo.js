import React, { Component } from 'react';
import Axios from 'axios';

const MARVEL_KEY = process.env.REACT_APP_MARVEL_PUBLIC;

class HeroInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  componentDidMount() {
    this.getCharacterById();
  }

  async getCharacterById() {
    let characterId = this.props.match.params.id;

    try {
      const response = await Axios.get(`/characters/${characterId}?apikey=${MARVEL_KEY}`);
      console.log(response.data.data.results[0]);

      const { id, name, description, thumbnail } = response.data.data.results[0];

      this.setState({
        id,
        name,
        description,
        thumbnail: `${thumbnail.path}.${thumbnail.extension}`
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { id, name, description, thumbnail } = this.state;
    return (
      <div className="hero-wrapper">
        <img src={thumbnail} alt="thumbnail hero"/>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default HeroInfo;
