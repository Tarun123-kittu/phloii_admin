import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        toggle: true,
    },
    reducers: {
        isToggleSidebar: (state) => {
            state.toggle = !state.toggle;
        },
    },
});

export const { isToggleSidebar } = toggleSlice.actions;
export default toggleSlice.reducer; 
