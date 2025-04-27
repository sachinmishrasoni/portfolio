import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    mode: 'light' | 'dark'
}

const localMode = localStorage.getItem('mode') || 'dark';
const isValidMode = (mode: string | null): mode is PaletteMode =>
    mode === 'light' || mode === 'dark';
const mode: PaletteMode = isValidMode(localMode) ? localMode : 'dark';

const initialState: ThemeState = {
    mode
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('mode', state.mode);
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
