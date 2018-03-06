import { combineReducers } from 'redux';
import LibriReducer from './reducer_libri';
const rootReducer = combineReducers({
  libri: LibriReducer
});

export default rootReducer;
