import { ThemeAction, ThemeState } from "./type";

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            const newMode = state.mode === 'dark' ? 'light' : 'dark';
            localStorage.setItem('mode', newMode);
            return { ...state, mode: newMode };

        default:
            return state;
    }
};

export default themeReducer;