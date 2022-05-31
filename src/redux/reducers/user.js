import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        email: '',
        id: 1,
        login: ''
    },
    reducers: {}
});
export default userReducer.reducer
export const {} = userReducer.actions;