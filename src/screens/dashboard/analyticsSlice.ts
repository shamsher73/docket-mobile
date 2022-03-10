import { createSlice } from '@reduxjs/toolkit';

const analyticsReducer = createSlice({
    name : 'analytics',
    initialState: {
        data : {},
        isSuccessLoading: false,
        error: null,
        isCategoryLoading: false,

        categoryData: [],
    },
    reducers : {
        analyticsRequested(state,action) {
            return {data: {},isSuccessLoading: true, error: null};
        },
        analyticsSuccess : (state, action: any) => {
            state.isSuccessLoading = false;
            state.data = action.payload;
        },
        analyticsFailed : (state, action) => {
            state.isSuccessLoading = false;
            state.error = action.payload.error;
        },

        analyticsCategoryRequested(state,action) {
            return {categoryData: [],isCategoryLoading: true};
        },
        analyticsCategorySuccess : (state, action: any) => {
            state.isCategoryLoading = false;
            state.categoryData = action.payload;
        },
        analyticsCategoryFailed : (state, action) => {
            state.isCategoryLoading = false;
            state.error = action.payload.error;
        }

    },
}
)
export const { 
    analyticsRequested,
    analyticsSuccess,
    analyticsFailed,

    analyticsCategoryRequested,
    analyticsCategorySuccess,
    analyticsCategoryFailed
 } = analyticsReducer.actions

export default analyticsReducer.reducer
