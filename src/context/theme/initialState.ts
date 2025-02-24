import { AlertColor, PaletteMode } from "@mui/material";
import { ThemeState } from "./type";

const localMode = localStorage.getItem('mode') || 'dark';
const isValidMode = (mode: string | null): mode is PaletteMode =>
    mode === 'light' || mode === 'dark';
const mode: PaletteMode = isValidMode(localMode) ? localMode : 'dark';

const initialState: ThemeState = {
    mode,
    toast: {
        open: false,
        message: '',
        severity: 'info' as AlertColor,
    },
    confirmation: {
        open: false,
        title: '',
        message: '',
        onConfirm: () => { }, // Default no-op function
    },
};

export default initialState;