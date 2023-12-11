import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        summ: 0,
        time: 0,
        services: []
    },
    reducers: {
        addService(state, action) {
            state.summ = state.summ + action.payload.price;
            state.time = state.time + action.payload.longevity;
            state.services.push(action.payload.serviceName);
        },
        removeService(state, action) {
            state.summ = state.summ - action.payload.price;
            state.time = state.time - action.payload.longevity;
            state.services = state.services.filter(
                (service) => service !== action.payload.serviceName
            );
        },
        nullify(state) {
            state.summ = 0
            state.time = 0
            state.services = []
        },
    }
})

export default toolkitSlice.reducer

export const { addService, removeService, nullify } = toolkitSlice.actions