import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import uiReducer from "./features/ui/uiSlice";
import projectsReducer from "./features/projects/projectsSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        ui: uiReducer,
        projects: projectsReducer,
    },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
