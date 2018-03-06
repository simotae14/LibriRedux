import React, { Component } from 'react';
// importo il container
import ListaLibri from '../containers/lista-libri';

export default class App extends Component {
  render() {
    return (
      <div>
        <ListaLibri />
      </div>
    );
  }
}
