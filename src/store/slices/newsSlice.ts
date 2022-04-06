import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    news: [],
    error: ''
}

export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {
        newsFetching(state){
            state.isLoading = true;
        },
        newsFetchingSuccess(state, action){
            state.isLoading = false;
            state.error = '';
            state.news = action.payload;
        },
        newsFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default newsSlice.reducer