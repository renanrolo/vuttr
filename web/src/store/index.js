import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import tools from './tools/toolsReducer'

// const rootReducer = combineReducers({
//     tools
// });

//original
//const store = createStore(rootReducer);

//exemplo 1
const store = createStore(tools, applyMiddleware(ReduxThunk));

//exemplo 2
//const store = applyMiddleware(promisse, ReduxThunk)(createStore)(rootReducer)

export default store;