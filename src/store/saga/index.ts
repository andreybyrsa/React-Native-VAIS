import getUserToken from '../../api/getUserToken'
import { setApiUser } from '../../api/setApiUser'
import { User } from '../../domain/User'
import { setUser, setUserToken, setVerifyCode } from '../reducers/user/UserReducer'
import UserSelector from '../reducers/user/UserSelector'
import { all, call, put, select, takeEvery, takeLeading } from 'redux-saga/effects'

function* setUserWorker() {
  const user: User = yield select(UserSelector())
  const apiUser: User = yield call(() =>
    setApiUser({
      phoneNumber: user.phoneNumber,
      userName: user.userName,
    }),
  )

  yield put(
    setUser({
      ...user,
    }),
  )
}

function* setUserTokenWorker() {
  const user: User = yield select(UserSelector())
  const userToken: { id: string } = yield call(() =>
    getUserToken({
      code: user.verifyCode,
      phoneNumber: user.phoneNumber,
    }),
  )

  yield put(
    setUserToken(userToken.id),
  )
}

function* watchAllSaga() {
  yield all([takeLeading(setUser, setUserWorker), takeLeading(setVerifyCode, setUserTokenWorker)])
}

export default function* rootSaga() {
  yield watchAllSaga()
}
