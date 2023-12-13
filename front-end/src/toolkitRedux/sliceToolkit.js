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
            state.services.push(action.payload.id);
        },
        removeService(state, action) {
            state.summ = state.summ - action.payload.price;
            state.time = state.time - action.payload.longevity;
            state.services = state.services.filter(
                (service) => service !== action.payload.id
            );
        },
        nullify(state) {
            state.summ = 0
            state.time = 0
            state.services = []
        },
        clearServices(state) {
            state.services = [];
        },
    }
});

export default toolkitSlice.reducer;

export const { addService, removeService, nullify, clearServices } = toolkitSlice.actions;
