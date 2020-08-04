import React, { Component } from 'react';

class Todolista extends Component {
  render() {
    return this.props.todolista.map((todoitem) => (
      <h3>{todoitem.naslov}</h3>
    ));
  }
}

export default Todolista;