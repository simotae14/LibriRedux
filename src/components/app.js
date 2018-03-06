import React, { Component } from 'react';
// importo il container
import ListaLibri from '../containers/lista-libri';
import DettaglioLibro from '../containers/dettaglio_libro';

export default class App extends Component {
  render() {
    return (
      <div>
        <ListaLibri />
        <DettaglioLibro />
      </div>
    );
  }
}
