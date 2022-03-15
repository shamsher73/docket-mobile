import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface SubTask {
    title: string
    startTime: string
    endTime: string
    status: string
}

export interface TaskState {
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
        tasksRequested : () =>  {
            return {tasks: [],isLoading: true, error: null};
        },
        tasksSuccess : (state, action: TaskAction) => {
            return {tasks: action.payload, isLoading: false, error: null};
        },
        tasksFailed : (state:RootState, action) => {
            return {tasks: [], isLoading: false, error: action.payload};
        },

        taskAddRequested : (state:RootState, action: TaskAction) =>{
            return {...state, isLoading: true, error: null};
        },
        taskAddSuccess : (state:RootState, action: TaskAction) => {     
            state.tasks.push(action.payload);
            state.isLoading = false;
        },
        taskAddFailed : (state:RootState, action) => {
            return {...state, isLoading: false, error: action.payload};
        },

        taskRemoveRequested : (state:RootState, action: TaskAction) => {
            return {...state, isLoading: true, error: null};
        },
        taskRemoveSuccess : (state:RootState, action: TaskAction) => {
            state.tasks = state.tasks.filter((task:TaskState) => task.id !== action.payload.id);
            state.isLoading = false;
        },
        taskRemoveFailed : (state:RootState, action) => {
            return {...state, isLoading: false, error: action.payload};
        },

        taskUpdateRequested : (state:RootState, action: TaskAction) => {
            state.tasks = getTasksWithUpdatedLoading(state,action.payload.id,true);
            state.error = null;
        },
        taskUpdateSuccess : (state:RootState, action: TaskAction) => {
            const newTask = action.payload;
            const newTasks = state.tasks.map(task => {
                if(task.id === action.payload.id) {
                    newTask.isLoading = false;
                    return newTask;
                }
                return task;
            });
            state.tasks = newTasks;
        },
        taskUpdateFailed : (state:RootState, action) => {
            state.tasks = getTasksWithUpdatedLoading(state,action.payload.id,false);
            state.error = action.payload.error;
        },

        taskMarkCompleteRequested : (state:RootState, action: TaskAction) => {
            state.tasks = getTasksWithUpdatedLoading(state,action.payload.id,true);
            state.error = null;
        },
        taskMarkCompleteSuccess : (state:RootState, action: TaskAction) => {
            const taskId = action.payload.id;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    task.status = action.payload.status;
                    task.isLoading = false;
                }
                return task;
            });
            state.tasks = newTasks;
        },
        taskMarkCompleteFailed : (state:RootState, action) => {
            state.tasks = getTasksWithUpdatedLoading(state,action.payload.id,false);
            state.error = action.payload.error;
        },
    },
}
)

const getTasksWithUpdatedLoading = (state:RootState,taskId:number,isLoading:boolean) => {
    const allTasks = state.tasks.map((task:TaskState) => {
        if(task.id === taskId) {
            task.isLoading = isLoading;
        }
        return task
    });
    return allTasks
}

export const { 
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
