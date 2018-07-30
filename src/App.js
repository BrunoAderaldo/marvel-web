import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const MARVEL_KEY = process.env.REACT_APP_MARVEL_PUBLIC;

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
      const response = await axios.get(`/characters?orderBy=name&limit=20&apikey=${MARVEL_KEY}`);
      const { results, count } = response.data.data;

      this.setState({ characters: results, count });
    } catch (err) {
      console.error(err);
    }
  }

  mountHeroesList() {
    const { characters } = this.state;

    return (
      <ul className="heroes-list">
        {
          characters.map(character => {
            const { path, extension } = character.thumbnail;

            return (
              <li key={character.id} className="heroes-list-item">
                <Link to={`/hero/${character.id}`}>
                  <img src={`${path}.${extension}`} alt={`${character.name} hero`} className="card-image" />
                  <h5>{character.name}</h5>
                  <h6>{character.id}</h6>
                </Link>
              </li>
            )
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
