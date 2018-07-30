import React, { Component } from 'react';
import Axios from 'axios';
import HeroHeader from '../HeroHeader/HeroHeader';
import HeroContent from '../HeroContent/HeroContent';
import HeroCollection from '../HeroCollection/HeroCollection';
import './HeroInfo.css';

const MARVEL_KEY = process.env.REACT_APP_MARVEL_PUBLIC;

class HeroInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbnail: '',
      comics: '',
      events: '',
      series: '',
      stories: ''
    };
  }

  componentDidMount() {
    this.getCharacterById();
  }

  async getCharacterById() {
    let characterId = this.props.match.params.id;

    try {
      const response = await Axios.get(`/characters/${characterId}?apikey=${MARVEL_KEY}`);

      const { name, description, thumbnail, comics, events, series, stories } = response.data.data.results[0];

      this.setState({
        name,
        description,
        thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
        comics,
        events,
        series,
        stories
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { name, description, thumbnail, comics, events, series, stories } = this.state;

    return (
      <div className="hero-wrapper">
        <HeroHeader image={thumbnail}></HeroHeader>
        <div className="hero-container">
          <HeroContent
            name={name}
            description={description}
          />
          <HeroCollection
            comics={comics}
            events={events}
            series={series}
            stories={stories}
          />
        </div>
      </div>
    );
  }
}

export default HeroInfo;
