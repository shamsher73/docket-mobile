import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


const categoryReducer = createSlice({
    name : 'category',
    initialState: {
        categories: [],
        isCategoryLoading: false,
        error: null
    },
    reducers : {
        categoryRequested : () => {
            return {categories: [], isCategoryLoading: true, error: null};
        },
        categoryRequestedSuccess : (state:RootState, action) => {
            state.isCategoryLoading = false;
            state.categories = action.payload         
        },
        categoryRequestedFailed : (state:RootState, action) => {
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
 } = categoryReducer.actions

export default categoryReducer.reducer