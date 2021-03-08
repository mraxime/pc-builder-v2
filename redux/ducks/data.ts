import { AnyAction } from 'redux';
import { Hardware } from '../../utils/data';

// CONSTANTS
// * En nommant les actions comme ça, on est certain qu'ils
// * resteront unique partout dans l'application
const SET_HARDWARES = 'data/SET_HARDWARES';

// Actions
export const setHardwares = (hardwares: Hardware[]) => ({
  type: SET_HARDWARES,
  payload: hardwares,
});

// initial state
const initialState = {
  hardwares: [],
};

// Reducer
const Data = (state: DataState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_HARDWARES:
      return {
        ...state,
        hardwares: action.payload,
      };
    default:
      return state;
  }
};
export default Data;

// Types (typescript)
export type DataState = {
  hardwares: Hardware[];
};
