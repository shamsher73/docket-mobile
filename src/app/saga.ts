import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "./sagaActions";
import { addTask, fetchData } from "../screens/my-day-tasks/taskSlice";

const accessToken = "acf1662d09d08e4b2b227d7578d2126b0e21486f";
const baseUrl = "http://localhost:3000";

export function* fetchDataSaga() {
  try {
    let result = yield call(() =>
        Axios.get(baseUrl+"/secure/tasks", {
            headers: {
                Authorization: "Bearer " + accessToken,
                scope: "read",
                "Content-Type": "application/json"
            }
        })
    );
    yield put(fetchData(result.data.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* addTaskSaga(action: any) {
    try {
        let result = yield call(() => 
            Axios.post(baseUrl+"/secure/createTask", action.payload, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "application/json"
                }
            })
        );
        yield put(addTask(result.data.data));
    } catch (e) {
        yield put({ type: "TODO_ADD_FAILED" });
    }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
  yield takeEvery(sagaActions.ADD_TASK, addTaskSaga);
}
