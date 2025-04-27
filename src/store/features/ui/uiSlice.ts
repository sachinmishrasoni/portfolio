import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
    message: string;
    severity: "success" | "error" | "warning" | "info";
    open: boolean;
}


interface UIState {
    toast: ToastState;
}

const initialState: UIState = {
    toast: { message: "", severity: "info", open: false },
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showToast: (state, action: PayloadAction<{ message: string; severity: "success" | "error" | "warning" | "info" }>) => {
            state.toast = { ...action.payload, open: true };
        },
        hideToast: (state) => {
            state.toast.open = false;
        },
    },
});

export const { showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer;
