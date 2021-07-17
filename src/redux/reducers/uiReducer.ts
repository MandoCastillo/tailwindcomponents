interface InitialState {
  hideMenu: boolean;
}

const initialState: InitialState = {
  hideMenu: false,
};

const uiReducer = (
  state: InitialState = initialState,
  action: any,
): InitialState => {
  switch (action.type) {
    case 'hideMenu':
      return { ...state, hideMenu: action.payload };

    default:
      return state;
  }
};

export default uiReducer;
