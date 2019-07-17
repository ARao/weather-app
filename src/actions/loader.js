import { LOADER } from '../constants/actionConst'

export const loaderShow = () => dispatch => {
    return dispatch({
          type: LOADER,
          loader: true,
        });
  }

export const loaderHide = () => dispatch => {
    return dispatch({
          type: LOADER,
          loader: false,
        });
  }