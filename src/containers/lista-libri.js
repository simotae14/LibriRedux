import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selezionaLibro } from '../actions/index';
import { bindActionCreators } from 'redux';

class ListaLibri extends Component {
  renderLista() {
    return this.props.libri.map((libro) => {
      return (
        <li
          key={libro.titolo}
          onClick={() => this.props.selezionaLibro(libro) }
          className='list-group-item'>
          {libro.titolo}
        </li>
      )
    });
  }
  render() {
    return(
      <ul className='list-group col-sm-4'>
        {this.renderLista()}
      </ul>
    );
  }
}

// creo funzione mapStateToProps per collegare lo state con il props
function mapStateToProps(state) {
  return {
    libri: state.libri
  }
}

// creo la funzione mapDispatchToProps
// Ogni cosa che viene restituita da questa funzione diventerà
// una props dentro al container ListaLibri
function mapDispatchToProps(dispatch) {
  // ogni volta che viene invocato selezionaLibro, il suo risultato verrà
  // passato a tutti i nostri reducers
  return bindActionCreators({
    selezionaLibro
  }, dispatch);
}

// creo il container collegando il Component con lo stato
// Trasforma ListaLibri da Component a Container - deve essere a conoscenza
// del metodo dispatch selezionaLibro. Che viene reso disponibile
// attraverso i props
export default connect(mapStateToProps, mapDispatchToProps)(ListaLibri);
