import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleReducer from "./sideBarToggle/SideBartoggle"

const appStore = configureStore({
    reducer: {
        sidebarToggle: sidebarToggleReducer, // Use the imported reducer
    },
});

export default appStore;
