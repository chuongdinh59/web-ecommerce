import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fetchUserAction } from 'redux/actions/user'
import cartReducer from 'redux/reducer/cart'
import productReducer from 'redux/reducer/product'
import userReducer from 'redux/reducer/user'
import rootSaga from '../redux/saga'



const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose


const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)


const token = JSON.parse(localStorage.getItem('token'))
if (token) {
    store.dispatch(fetchUserAction())
}

export default store
