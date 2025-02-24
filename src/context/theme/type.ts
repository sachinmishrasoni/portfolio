import { AlertColor, PaletteMode } from "@mui/material";
import { Dispatch } from "react";

export interface ThemeState {
    mode: PaletteMode;
    toast: {
        open: boolean;
        message: string;
        severity: AlertColor; // 'success' | 'error' | 'warning' | 'info'
    };
    confirmation: {
        open: boolean;
        title: string;
        message: string;
        onConfirm: () => void; // Callback for confirm action
    };
};


export type ThemeAction =
    | { type: 'TOGGLE_MODE' }
    | { type: 'SHOW_TOAST'; payload: { message: string; severity: AlertColor } }
    | { type: 'HIDE_TOAST' }
    | {
        type: 'SHOW_CONFIRMATION';
        payload: { title: string; message: string; onConfirm: () => void };
    }
    | { type: 'HIDE_CONFIRMATION' };

export interface ThemeContextValue {
    state: ThemeState;
    dispatch: Dispatch<ThemeAction>;
    showToast: (message: string, severity?: AlertColor) => void; // Optional severity
    hideToast: () => void;
    showConfirmation: (title: string, message: string, onConfirm: () => void) => void;
    hideConfirmation: () => void;
}