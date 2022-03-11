import { call, takeEvery, put } from "redux-saga/effects";
import { taskAddFailed, taskAddRequested, taskAddSuccess, taskMarkCompleteFailed, taskMarkCompleteRequested, taskMarkCompleteSuccess, taskRemoveFailed, taskRemoveRequested, taskRemoveSuccess, tasksFailed, tasksRequested, tasksSuccess, taskUpdateFailed, taskUpdateRequested, taskUpdateSuccess } from "./taskSlice";
import { callAPI } from "../../app/api";
import { Action } from "@reduxjs/toolkit";

export function* fetchTasks() {
  try {
    let result = yield call(() =>
        callAPI({ url: "/secure/tasks", method: "get" })
    );
    yield put(tasksSuccess(result.data.data));
  } catch (e) {
    yield put(tasksFailed({ error: e.message }));
  }
}

export function* addTaskSaga(action: Action) {
    try {
        let result = yield call(() => 
            callAPI({ url: "/secure/createTask", method: "post", data: action.payload })
        );
        yield put(taskAddSuccess(result.data.data));
    } catch (e) {
        yield put(taskAddFailed({ error: e.message }));
    }
}

export function* deleteTask(action: Action) {
    try {
        let result = yield call(() => 
            callAPI({ url: `/secure/deleteTask/${action.payload.id}`, method: "delete" })
        );
        yield put(taskRemoveSuccess(action.payload));
    } catch (e) {
        yield put(taskRemoveFailed({ error: e.message }));
    }
}

export function* editTask(action: Action) {
    const { id, ...payload } = action.payload;
    delete payload.totalTime;
    delete payload.isLoading;
    try {
        let result = yield call(() =>
            callAPI({ url: `/secure/updateTask/${id}`, method: "put", data: payload })
        );
        if(result.data.success) {
            yield put(taskUpdateSuccess(result.data.data));
        }
    } catch (e) {
        yield put(taskUpdateFailed({ error: e.message }));
    }
}

export function* markCompleted(action:Action) {
    try {
        let result = yield call(() =>
            callAPI({ url: `/secure/updateTaskStatus/${action.payload.id}`, method: "patch", data: {"status": action.payload.status} })
        );
        yield put(taskMarkCompleteSuccess(action.payload));
    } catch (e) {
        yield put(taskMarkCompleteFailed({ error: e.message }));
    }
}

export default function* rootSaga() {
    yield takeEvery(tasksRequested, fetchTasks);
    yield takeEvery(taskAddRequested, addTaskSaga);
    yield takeEvery(taskRemoveRequested, deleteTask);
    yield takeEvery(taskUpdateRequested, editTask);
    yield takeEvery(taskMarkCompleteRequested, markCompleted)
}
