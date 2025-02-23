import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import React, { useContext, useMemo } from 'react';

const AppThemeContext = React.createContext({});

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const theme = useMemo(() => responsiveFontSizes(createTheme({
        palette: {
            mode: 'dark',
            // background: { default: '#ffffff', paper: '#F7F7F7' },

            // background: { default: '#040D12', paper: '#040D12' },
            // primary: {
            //     main: '#FFD95F'
            // }
        },
    })), []);

    return (
        <AppThemeContext.Provider value={{}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}

export default AppThemeProvider;

export const useAppTheme = () => {
    const context = useContext(AppThemeContext);

    if (!context) {
        throw new Error('useAppTheme must be used within a AppThemeProvider');
    }

    return context;
}