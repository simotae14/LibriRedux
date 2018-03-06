import React, { Component } from 'react';
import { connect } from 'react-redux';

class DettaglioLibro extends Component {
  render() {
    // gestisco il caso in cui il libro è null
    if (!this.props.libro) {
      return <div>Seleziona un libro per iniziare.</div>
    }
    return (
      <div>
        <h3>Dettagli di:</h3>
        <div>
          Titolo: {this.props.libro.titolo}
        </div>
        <div>
          Pagine: {this.props.libro.pagine}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    libro: state.libroAttivo
  };
}

export default connect(mapStateToProps)(DettaglioLibro);
