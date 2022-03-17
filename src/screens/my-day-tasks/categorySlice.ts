import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CategoryType {
    name: string,
    id: string,
    userId: string
}

interface CategoryState {
    categories: Array<CategoryType>,
    isCategoryLoading: boolean,
    error: string
}

const categoryReducer:any = createSlice({
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
        categoryRequestedSuccess : (state:CategoryState, action:{payload:{categories:Array<CategoryType>}}) => {
            state.isCategoryLoading = false;
            state.categories = action.payload         
        },
        categoryRequestedFailed : (state:RootState, action:{payload:{error:string}}) => {
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