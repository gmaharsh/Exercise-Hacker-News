import { createSlice } from '@reduxjs/toolkit'


const newsSlice = createSlice({
    name: 'news',
    initialState :[],
    reducers: {
        addtoHistory: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {
    addtoHistory,
} = newsSlice.actions

export const selectNews = (state) => state.news
export default newsSlice.reducer