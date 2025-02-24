import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React, { useContext, useMemo, useReducer } from 'react';
import { ThemeContextValue } from './type';
import themeReducer from './themeReducer';
import initialState from './initialState';

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
    undefined
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const theme = useMemo(() => responsiveFontSizes(createTheme({
        palette: {
            mode: state.mode,
            background: state.mode === 'dark'
                ? { default: '#040D12', paper: '#040D12' }
                : { default: '#ffffff', paper: '#F7F7F7' },
            // primary: {
            //     main: '#FFD95F'
            // }
        },
    })), [state.mode]);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useAppTheme must be used within a AppThemeProvider');
    }

    return context;
}