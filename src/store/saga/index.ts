import getUserToken from '../../api/getUserToken'
import { setApiUser } from '../../api/setApiUser'
import setProfilePicture from '../../api/setProfilePicture'
import { User } from '../../domain/User'
import { setUser, setUserToken, setVerifyCode } from '../reducers/user/UserReducer'
import UserSelector from '../reducers/user/UserSelector'
import { all, call, put, select, takeLeading } from 'redux-saga/effects'

function* setUserWorker() {
  const user: User = yield select(UserSelector())

  let apiProfilePic = ''
  if (user.profilePic) {
    apiProfilePic = yield call(() => setProfilePicture(user.profilePic))
  }

  const apiUser: User = yield call(() =>
    setApiUser({
      phoneNumber: user.phoneNumber,
      userName: user.userName,
      profilePic: apiProfilePic,
    }),
  )

  yield put(
    setUser({
      ...apiUser,
      profilePic: apiProfilePic
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

  if (userToken) {
    yield put(setUserToken(userToken.id))
  }
}

function* watchAllSaga() {
  yield all([takeLeading(setUser, setUserWorker), takeLeading(setVerifyCode, setUserTokenWorker)])
}

export default function* rootSaga() {
  yield watchAllSaga()
}
