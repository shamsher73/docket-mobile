import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface SubTask {
    title: string
    startTime: string
    endTime: string
    status: string
}

interface TaskState {
    id:number
    name: string
    description: string
    priority: string
    subTasks: SubTask[]
    categoryName: string | never
    tags: string[]
    time: number
    dueDate: string
    remindMe: string
    repeat: string
    status: string
    isLoading: boolean
}

interface TaskAction {
    payload: TaskState
}

const taskReducer = createSlice({
    name : 'task',
    initialState: {
        tasks: [],
        isLoading: false,
        error: null
    },
    reducers : {
        tasksRequested() {
            return {tasks: [],isLoading: true, error: null};
        },
        tasksSuccess : (state, action: TaskAction) => {
            state.isLoading = false;
            state.tasks = action.payload;
        },
        tasksFailed : (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },

        taskAddRequested(state, action: TaskAction) {
            state.isLoading = true;
            state.error = null;
        },
        taskAddSuccess : (state, action: TaskAction) => {
            const newTask = action.payload;
            state.tasks.push(newTask);
            state.isLoading = false;
        },
        taskAddFailed : (state, action) => {
            state.error = action.payload.error;
            state.isLoading = false;
        },

        taskRemoveRequested : (state, action: any) => {
            state.isLoading = true;
            state.error = null;
        },
        taskRemoveSuccess : (state, action: any) => {
            const taskId = action.payload.id;
            const newTasks = state.tasks.filter(task => task.id !== taskId);
            state.tasks = newTasks;
            state.isLoading = false;
        },
        taskRemoveFailed : (state, action) => {
            state.error = action.payload.error;
        },


        taskUpdateRequested : (state:RootState, action: any) => {
            const taskId = action.payload.id;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    task.isLoading = true;
                }
                return task;
            });
            state.tasks = newTasks;
            state.error = null;
        },
        taskUpdateSuccess : (state:RootState, action: any) => {
            const taskId = action.payload.id;
            const newTask = action.payload;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    newTask.isLoading = false;
                    return newTask;
                }
                return task;
            });
            state.tasks = newTasks;

        },
        taskUpdateFailed : (state:RootState, action) => {
            const taskId = action.payload.id;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    task.isLoading = false;
                }
                return task;
            });
            state.tasks = newTasks;
            state.error = action.payload.error;
        },

        taskMarkCompleteRequested : (state, action: any) => {
            const taskId = action.payload.id;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    task.isLoading = true;
                }
                return task;
            });
            state.tasks = newTasks;
            state.error = null;
        },
        taskMarkCompleteSuccess : (state, action: any) => {
            const taskId = action.payload.id;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    task.status = action.payload.status;
                    task.isLoading = false;
                }
                return task;
            });
            state.tasks = newTasks;
            // state.isLoading = false;
        },
        taskMarkCompleteFailed : (state, action) => {
            const taskId = action.payload.id;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    task.isLoading = false;
                }
                return task;
            });
            state.tasks = newTasks;
            state.error = action.payload.error;
        },

        // getFilteredTasks : (state, action: any) => {
        //     return state.filter((task:TaskState) => task.status === action.payload)
        // }

    },
}
)
export const { 
    // getFilteredTasks, 
    tasksRequested, 
    tasksSuccess, 
    tasksFailed,

    taskAddRequested,
    taskAddSuccess,
    taskAddFailed,

    taskRemoveRequested,
    taskRemoveSuccess,
    taskRemoveFailed,

    taskUpdateRequested,
    taskUpdateSuccess,
    taskUpdateFailed,

    taskMarkCompleteRequested,
    taskMarkCompleteSuccess,
    taskMarkCompleteFailed
 } = taskReducer.actions

export default taskReducer.reducer
