import { PaletteMode } from "@mui/material";
import { ThemeState } from "./type";

const localMode = localStorage.getItem('mode') || 'dark';
const isValidMode = (mode: string | null): mode is PaletteMode =>
    mode === 'light' || mode === 'dark';
const mode: PaletteMode = isValidMode(localMode) ? localMode : 'dark';

const initialState: ThemeState = {
    mode,
};

export default initialState;