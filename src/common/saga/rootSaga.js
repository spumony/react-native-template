import { all, fork } from 'redux-saga/effects';

import appRootSaga from './app-saga';

export default function* rootSaga() {
  yield all([fork(appRootSaga)]);
}
