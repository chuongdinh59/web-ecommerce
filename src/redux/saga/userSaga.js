import { call, put } from 'redux-saga/effects';
import { errorLoginAction, errorRegisterAction, fetchUserAction, registerAction, setLoadingAction, setUserAction } from 'redux/actions/user';
import authService from 'service/authService';
import userService from 'service/userService';

export function* fetchLogin(data) {
    const token = yield call(authService.login, data.payload);
    if (token?.error) {
        yield put(errorLoginAction(token?.message))
    }
    else {
        localStorage.setItem('token', JSON.stringify(token.data))
        yield put(setLoadingAction(true))
        yield put(fetchUserAction())
    }
}

export function* fetchUser() {
    try {
        const dataUser = yield call(userService.getUser);
        yield put(setUserAction(dataUser.data))
        yield put(setLoadingAction(false))
    } catch (error) {
        
    }
}

export function* fetchRegister(data) {
    yield put(setLoadingAction(true))
    const res = yield call(authService.register, data.payload)
    if (res?.error) {
        yield put(errorRegisterAction(res?.error))
    }
    else {
        yield put(registerAction())
    }
}