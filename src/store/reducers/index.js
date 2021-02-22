import {combineReducers} from 'redux';
import {poke} from './poke';

const rootReducer = combineReducers({
  poke,
});

export default rootReducer;
