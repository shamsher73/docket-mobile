import { call, takeEvery, put } from "redux-saga/effects";
import { callAPI } from "../../app/api";
import { analyticsCategoryFailed, analyticsCategoryRequested, analyticsCategorySuccess, analyticsFailed, analyticsRequested, analyticsSuccess } from "./analyticsSlice";

export function* fetchData(action) {
  try {
    let result = yield call(() =>
      callAPI({ url: "/secure/taskSuccess", method: "POST", data: action.payload })
    );
    yield put(analyticsSuccess(result.data.data));
  } catch (e) {
    yield put(analyticsFailed({ error: e.message }));
  }
}

export function* fetchCategoryData(action) {
  try {
    let result = yield call(() =>
      callAPI({ url: "/secure/categoryTime", method: "POST", data: action.payload })
    );
    yield put(analyticsCategorySuccess(result.data.data));
  } catch (e) {
    yield put(analyticsCategoryFailed({ error: e.message }));
  }
}

export default function* rootSaga() {
  yield takeEvery(analyticsRequested, fetchData);
  yield takeEvery(analyticsCategoryRequested, fetchCategoryData);
}
