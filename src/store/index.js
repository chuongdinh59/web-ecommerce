import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import productReducer from 'redux/reducer/product'
import userReducer from 'redux/reducer/user'
import rootSaga from '../redux/saga'



const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose


const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)



export default store
