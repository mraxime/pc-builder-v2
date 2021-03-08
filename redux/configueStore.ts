import { combineReducers, createStore } from 'redux';
import dataReducer, { DataState } from './ducks/data';
import modelsReudcer, { ModelsState } from './ducks/models';

// Combining all ducks Reducers
const reducer = combineReducers({
  data: dataReducer,
  models: modelsReudcer,
});

// Creating the store
const store = createStore(reducer);

// Defining the Store type (typescript)
export type StoreState = {
  data: DataState;
  models: ModelsState;
};

export default store;
