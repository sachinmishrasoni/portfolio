import { Alert, Snackbar } from "@mui/material"
import { useAppTheme } from "../../../context/theme/themeProvider"

const Toaster = () => {
    const { state, hideToast } = useAppTheme()
    return (
        <Snackbar
            open={state.toast.open}
            autoHideDuration={3000}
            onClose={hideToast}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                // onClose={hideToast}
                severity={state.toast.severity}
                sx={{ width: '100%', borderRadius: 25 }}
            >
                {state.toast.message}
            </Alert>
        </Snackbar>
    )
}

export default Toaster