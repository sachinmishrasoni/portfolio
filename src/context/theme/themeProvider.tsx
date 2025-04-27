import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider as MuiThemeProvider, AlertColor } from '@mui/material';
import React, { useContext, useMemo, useReducer } from 'react';
import { ThemeContextValue } from './type';
import themeReducer from './themeReducer';
import initialState from './initialState';
import Toaster from '../../components/common/Toaster';
import ConfirmationDialog from '../../components/common/ConfirmationDialog';

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
                : { default: '#FBFBFB', paper: '#F8FAFC' },
            primary: {
                main: '#BEADFA'
            },
            // text: {
            //     primary: '#27374D',
            //     secondary: '#4a5565'
            // },
        },
        mixins:{
            toolbar: {
                minHeight: '48px'
            }
        },
        typography: {
            fontFamily: ['roboto'].join(','),
        }
    })), [state.mode]);

    const showToast = (message: string, severity: AlertColor = 'info') => {
        dispatch({ type: 'SHOW_TOAST', payload: { message, severity } });
    };

    const hideToast = () => {
        dispatch({ type: 'HIDE_TOAST' });
    };

    const showConfirmation = (title: string, message: string, onConfirm: () => void) => {
        dispatch({ type: 'SHOW_CONFIRMATION', payload: { title, message, onConfirm } });
    };

    // throw new Error('useAppTheme must be used within a AppThemeProvider');

    const hideConfirmation = () => {
        dispatch({ type: 'HIDE_CONFIRMATION' });
    };

    return (
        <ThemeContext.Provider value={{ state, dispatch, showToast, hideToast, showConfirmation, hideConfirmation }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                <Toaster />
                <ConfirmationDialog />
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