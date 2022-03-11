import { call, takeEvery, put } from "redux-saga/effects";
import { callAPI } from "../../app/api";
import { categoryRequested, categoryRequestedFailed, categoryRequestedSuccess } from "./categorySlice";

export function* fetchCategories() {
  try {
    let result = yield call(() =>
        callAPI({ url: "/secure/categories", method: "get" })
    );
    yield put(categoryRequestedSuccess(result.data.data));
  } catch (e) {
    yield put(categoryRequestedFailed({ error: e.message }));
  }
}

export default function* rootSaga() {
    yield takeEvery(categoryRequested, fetchCategories);
}
