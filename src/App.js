import React, { Component } from 'react';
import axios from 'axios';


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
      const response = await axios.get(`/characters?orderBy=name&limit=20&apikey=${process.env.REACT_APP_MARVEL_PUBLIC}`);
      const { results, count } = response.data.data;

      console.log(results);

      this.setState({ characters: results, count });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.count} Characters</span>
        <ul className="list">
          {
            this.state.characters.map(character => (
              <li className="list-item" key={character.id}>
                <h5>{character.name}</h5>
                <h6>{character.id}</h6>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
