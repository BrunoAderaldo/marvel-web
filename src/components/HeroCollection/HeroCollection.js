import React, { Component } from 'react';
import './HeroCollection.css';

class HeroCollection extends Component {
  mountCollections(collections) {
    return (
      <ul>
        {
          collections.map(collection => {
            console.log(collection);
            const { available, items, name, returned } = collection;

            return (
              <li key={name} className="hero-collection">
                <div className="hero-collection-header">
                  <h3 className="hero-collection-name">{name}</h3>
                  <span className="hero-collection-count">{`${returned} of ${available}`}</span>
                </div>
                <div className="hero-collection-items">
                  {
                    items.map((item, i) => <span key={i}>{item.name}</span>)
                  }
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    let collections = [];

    for (const key in this.props) {
      if (this.props.hasOwnProperty(key)) {
        const element = this.props[key];
        if (element) {
          element.name = key;
          collections.push(element);
        }
      }
    }

    console.log(collections);

    return (
      <div className="hero-resource">
        { this.mountCollections(collections) }
      </div>
    );
  }
}

export default HeroCollection;
