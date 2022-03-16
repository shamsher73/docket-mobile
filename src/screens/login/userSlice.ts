import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface UserState {
    id: string,
    email:string,
    name: string,
    photo: string,
}

interface UserAction {
    payload: {
        user: UserState
    }
}

const userSlice:any = createSlice({
    name : 'user',
    initialState: {
            email: '',
            id: '',
            name: '',
            photo: ''
    },
    reducers : {
        storeUser : (state:UserState,action:UserAction) => {
            state.id = action.payload.user['id'];
            state.email = action.payload.user['email'];
            state.photo = action.payload.user['photo'];
            state.name = action.payload.user['name'];
        },
    },
})

export const { 
    storeUser
 } = userSlice.actions

export default userSlice.reducer