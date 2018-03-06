import { combineReducers } from 'redux';
import LibriReducer from './reducer_libri';
import LibroAttivo from './reducer_libro_attivo';

const rootReducer = combineReducers({
  libri: LibriReducer,
  libroAttivo: LibroAttivo
});

export default rootReducer;
