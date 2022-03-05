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
    initialState: [],
    reducers : {
        fetchData : (state, action: TaskAction) => {
            action.payload.map(
                (task:any) => {
                    state.push(task);
                }
            )
        },
        addTask : (state, action: TaskAction) => {
            const newTask = action.payload;
            state.push(newTask)
        },
        removeTask : (state, action: any) => {
            const id = action.payload.id
            const taskToRemove = state.find((task:TaskState) => task.id === id)
            return state.filter((task:TaskState) => task !== taskToRemove)
        },
        updateTask : (state, action: any) => {
            const id = action.payload.id
            const taskToUpdate = state.find((task:TaskState) => task.id === id)
            const updatedTask = {
                ...taskToUpdate,
                ...action.payload
            }
            return state.map((task:TaskState) => task.id === id ? updatedTask : task)
        },

        //get filterd tasks
        getFilteredTasks : (state, action: any) => {
            return state.filter((task:TaskState) => task.status === action.payload)
        }

    },
}
)
export const { addTask, removeTask, updateTask, getFilteredTasks, fetchData } = taskReducer.actions

export default taskReducer.reducer
