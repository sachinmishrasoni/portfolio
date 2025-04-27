import { Alert, Snackbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { hideToast } from "@/store/features/ui/uiSlice";

const Toaster = () => {
    const dispatch = useDispatch();
    const { open, message, severity } = useSelector((state: RootState) => state.ui.toast);

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => dispatch(hideToast())}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                // onClose={hideToast}
                severity={severity}
                sx={{ width: '100%', borderRadius: 25 }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Toaster