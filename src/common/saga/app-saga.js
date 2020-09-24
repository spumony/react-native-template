import { put } from 'redux-saga/effects';

export default function* appRootSaga() {
  yield put({ type: 'test' });
}
