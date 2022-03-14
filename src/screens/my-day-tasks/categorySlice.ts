import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


const taskReducer = createSlice({
    name : 'category',
    initialState: {
        categories: [],
        isCategoryLoading: false,
        error: null
    },
    reducers : {
        categoryRequested : (state, action: any) => {
            state.isCategoryLoading = true;
            state.error = null;
        },
        categoryRequestedSuccess : (state, action: any) => {
            state.isCategoryLoading = false;
            state.categories = action.payload         
        },
        categoryRequestedFailed : (state, action) => {
            state.isCategoryLoading = false;
            state.error = action.payload.error;
        },
    },
}
)
export const { 
    categoryRequested,
    categoryRequestedSuccess,
    categoryRequestedFailed
 } = taskReducer.actions

export default taskReducer.reducer