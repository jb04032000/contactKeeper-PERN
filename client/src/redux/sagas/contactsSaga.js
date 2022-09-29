import { call, fork, put, takeEvery } from "redux-saga/effects";
import { getContactList } from "../services/contacts.service";
import { contactOperationRequested } from "../slices/contactSlice";

// worker for get contact List.
function* workerGetContactList(action) {
  try {
    const response = yield call(getContactList, action.payload);
    const res_body = response ? response : {};
    const res_status = res_body.success;

    if (res_status) {
      const payload = res_body.data;
      yield put({
        type: getContactListSuccess,
        payload,
      });
    } else {
      yield put({
        type: contactOperationFail,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: contactOperationFail, message: err.message });
  }
}

// watch for get contact List.
function* watchGetContactList() {
  yield takeEvery(contactOperationRequested, workerGetContactList);
}

// running contact related sagas.
const contactSagas = [fork(watchGetContactList)];

export default contactSagas;
