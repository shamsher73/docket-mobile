import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "./sagaActions";
import { addTask, fetchData, removeTask, updateTask } from "../screens/my-day-tasks/taskSlice";
import Config from "react-native-config";

const accessToken = Config.API_TOKEN;
const baseUrl = Config.API_URL;

export function* fetchTasks() {
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

export function* deleteTask(action: any) {
    try {
        let result = yield call(() => 
            Axios.delete(baseUrl+"/secure/deleteTask/"+action.payload.id, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "application/json"
                }
            })
        );
        if(result.data.success) {
            yield put(removeTask(action.payload));
        }
    } catch (e) {
        yield put({ type: "TODO_DELETE_FAILED" });
    }
}

export function* editTask(action: any) {
    const { id, ...payload } = action.payload;
    delete payload.totalTime;
    try {
        let result = yield call(() =>
            Axios.put(baseUrl+"/secure/updateTask/"+id, payload, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "application/json"
                }
            })
        );
        if(result.data.success) {
            yield put(updateTask(result.data.data));
        }
    } catch (e) {
        yield put({ type: "TODO_EDIT_FAILED" });
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_TASKS, fetchTasks);
    yield takeEvery(sagaActions.ADD_TASK, addTaskSaga);
    yield takeEvery(sagaActions.DELETE_TASK, deleteTask);
    yield takeEvery(sagaActions.EDIT_TASK, editTask);
}
