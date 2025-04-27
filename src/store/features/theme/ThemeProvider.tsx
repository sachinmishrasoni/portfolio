import { useMemo } from 'react';
import Toaster from '@/components/common/Toaster';
import { RootState } from '@/store';
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { mode } = useSelector((state: RootState) => state.theme);

    // console.log(themeState, 'themeState');

    const theme = useMemo(() => responsiveFontSizes(createTheme({
        palette: {
            mode: mode,
            background: mode === 'dark'
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
        mixins: {
            toolbar: {
                minHeight: '48px'
            }
        },
        typography: {
            fontFamily: ['roboto'].join(','),
        }
    })), [mode]);
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Toaster />
        </MuiThemeProvider>
    )
}

export default ThemeProvider