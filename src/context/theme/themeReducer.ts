import { ThemeAction, ThemeState } from "./type";

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            const newMode = state.mode === 'dark' ? 'light' : 'dark';
            localStorage.setItem('mode', newMode);
            return { ...state, mode: newMode };

        case 'SHOW_TOAST':
            return {
                ...state,
                toast: { ...state.toast, open: true, ...action.payload },
            };

        case 'HIDE_TOAST':
            return { ...state, toast: { ...state.toast, open: false } };

        case 'SHOW_CONFIRMATION':
            return {
                ...state,
                confirmation: { ...state.confirmation, open: true, ...action.payload },
            };

        case 'HIDE_CONFIRMATION':
            return { ...state, confirmation: { ...state.confirmation, open: false } };

        default:
            return state;
    }
};

export default themeReducer;