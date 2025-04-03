import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../../actions";

const initialState = [
    {title:"Song one"},
    {title:"Song two"},
    {title:"Song three"},
    {title:"Song four"}
]

export const songSlice = createSlice({
    name:"songs",
    initialState: initialState,
    reducers: {
        addSong(state,action) {
            state.push(action.payload);
        },
        removeSong(state,action) {
            const index = state.findIndex(p => p.title === action.payload);
            state.splice(index,1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset,() => {
            return [];
        })
    }
})

export const {addSong,removeSong} = songSlice.actions;

