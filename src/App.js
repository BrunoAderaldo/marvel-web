import React, { Component } from 'react';
import axios from 'axios';

const marvelKey = process.env.REACT_APP_MARVEL_PUBLIC;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      count: 0,
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  async getCharacters() {
    try {
      const response = await axios.get(`/characters?orderBy=name&limit=20&apikey=${marvelKey}`);
      const { results, count } = response.data.data;

      console.log(results);

      this.setState({ characters: results, count });
    } catch (error) {
      console.error(error);
    }
  }

  mountHeroesList() {
    const { characters } = this.state;

    return (
      <ul className="list">
        {
          characters.map(character => {
            const { path, extension } = character.thumbnail;

            return <li key={character.id} className="list-item">
              <img src={`${path}.${extension}`} alt={`${character.name} hero`} className="card-image" />
              <h5>{character.name}</h5>
              <h6>{character.id}</h6>
            </li>
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.count} Characters</span>
        { this.mountHeroesList() }
      </div>
    );
  }
}

export default App;
