import { AnyAction } from 'redux';
import { Model } from '../../utils/data';

// CONSTANTS
// * En nommant les actions comme ça, on est certain qu'ils
// * resteront unique partout dans l'application
const ADD_MODEL = 'models/ADD_MODEL';
const REMOVE_MODEL = 'models/REMOVE_MODEL';
const SET_MODELS = 'models/SET_MODELS';
const SAVE_MODELS = 'models/SAVE_MODELS';
const RESET_MODELS = 'models/RESET_MODELS';

// Actions
export const addModel = (model: Model) => ({
  type: ADD_MODEL,
  payload: model,
});

export const removeModel = (model: Model) => ({
  type: REMOVE_MODEL,
  payload: model,
});

export const setModels = (models: Model[]) => ({
  type: SET_MODELS,
  payload: models,
});

export const saveModels = () => ({
  type: SAVE_MODELS,
});

export const resetModels = () => ({
  type: RESET_MODELS,
});

// Initial state
const initialState = {
  selectedModels: [],
};

// Reducer
const Models = (state: ModelsState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_MODEL:
      //prevent duplication
      const index = state.selectedModels.findIndex(
        ({ category }) => action.payload.category === category,
      );
      if (index !== -1) {
        state.selectedModels[index] = action.payload;
        return state;
      } else
        return {
          ...state,
          selectedModels: [...state.selectedModels, action.payload],
        };
    case REMOVE_MODEL:
      return {
        ...state,
        selectedModels: state.selectedModels.filter(
          (model) => model.id !== action.payload.id,
        ),
      };
    case SET_MODELS:
      return { ...state, selectedModels: action.payload };
    case SAVE_MODELS:
      window.localStorage.setItem(
        'selectedModels',
        JSON.stringify(state.selectedModels),
      );
      window.alert(
        'CONFIG SAVED IN LOCALSTORAGE (si tu refresh la page, la config est préservé)',
      );
      return state;
    case RESET_MODELS:
      window.localStorage.removeItem('selectedModels');
      return { ...state, selectedModels: [] };
    default:
      return state;
  }
};
export default Models;

// Types (typescript)
export type ModelsState = {
  selectedModels: Model[];
};
