import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice=createSlice({
    name: "toolkit",
    initialState:{
        summ: 0,
        time: 0,
    },
    reducers:{
        addService(state,action){
            state.summ=state.summ+ action.payload.money 
            state.time=state.time+ action.payload.time 
        },
        removeService(state,action){
            state.summ=state.summ-action.payload.money
            state.time=state.time-action.payload.time
        },
        nullify(state){
            state.summ=0
            state.time=0
        },
    }
})

export default toolkitSlice.reducer

export const {addService,removeService,nullify} =toolkitSlice.actions