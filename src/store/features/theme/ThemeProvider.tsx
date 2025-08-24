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
                : { default: '#FBFBFB', paper: '#F2F2F2' },
            primary: {
                main: '#C8A1E0',
                // main: '#732255'
            },
            secondary: {
                main: '#FF7F3E'
            },
            success: {
                main: '#08CB00'
            },
            error: {
                main: '#FE4F2D'
            },
            // background: {
            //     default: '#F5F5F5',
            //     paper: '#F5F5F5'
            // },
            text: {
                primary: mode === 'dark' ? '#EFEFEF' : '#27374D',
                // secondary: '#4a5565'
            },
        },
        mixins: {
            toolbar: {
                minHeight: '48px'
            }
        },
        typography: {
            // fontFamily: ['roboto'].join(','),
            fontFamily: ['Mooli'].join(','),
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    }
                }
            }
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