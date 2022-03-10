import { createSlice } from '@reduxjs/toolkit';

const analyticsReducer = createSlice({
    name : 'analytics',
    initialState: {
        data : {},
        isSuccessLoading: false,
        error: null
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
    },
}
)
export const { 
    analyticsRequested,
    analyticsSuccess,
    analyticsFailed
 } = analyticsReducer.actions

export default analyticsReducer.reducer
