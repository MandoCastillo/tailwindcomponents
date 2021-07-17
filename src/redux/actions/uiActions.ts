import { Dispatch } from 'react';

export const hideMenu = (hide: boolean) => (dispatch: Dispatch<any>) => {
  dispatch({ type: 'hideMenu', payload: hide });
};
