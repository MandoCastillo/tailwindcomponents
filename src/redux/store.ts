import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? //@ts-ignore
      composeWithDevTools({
        name: 'Redux',
        realtime: true,
        trace: true,
        traceLimit: 20,
      })
    : compose;

const store = createStore(
  rootReducer,
  // @ts-ignore
  composeEnhancers(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
