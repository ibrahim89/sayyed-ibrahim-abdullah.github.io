import * as actionTypes from './actionTypes';

export function toggleTheme() {
  const action: AppAction = {
    type: actionTypes.TOGGLE_THEME
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

