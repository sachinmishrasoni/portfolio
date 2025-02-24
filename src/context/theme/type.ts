import { PaletteMode } from "@mui/material";
import { Dispatch } from "react";

export interface ThemeState {
    mode: PaletteMode;
};


export type ThemeAction = { type: 'TOGGLE_MODE' };

export interface ThemeContextValue {
    state: ThemeState;
    dispatch: Dispatch<ThemeAction>;
}