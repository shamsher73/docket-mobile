import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
            action.payload.map(
                (task:any) => {
                    state.tasks.push(task)
                }
            )
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


        taskUpdateRequested : (state, action: any) => {
            state.isLoading = true;
            state.error = null;
        },
        taskUpdateSuccess : (state, action: any) => {
            const taskId = action.payload.id;
            const newTask = action.payload;
            const newTasks = state.tasks.map(task => {
                if(task.id === taskId) {
                    return newTask;
                }
                return task;
            });
            state.tasks = newTasks;
            state.isLoading = false;
        },
        taskUpdateFailed : (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },

        // updateTask : (state, action: any) => {
        //     const id = action.payload.id
        //     const taskToUpdate = state.find((task:TaskState) => task.id === id)
        //     const updatedTask = {
        //         ...taskToUpdate,
        //         ...action.payload
        //     }
        //     return state.map((task:TaskState) => task.id === id ? updatedTask : task)
        // },

        //get filterd tasks
        getFilteredTasks : (state, action: any) => {
            return state.filter((task:TaskState) => task.status === action.payload)
        }

    },
}
)
export const { 
    updateTask, 
    getFilteredTasks, 
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
 } = taskReducer.actions

export default taskReducer.reducer
