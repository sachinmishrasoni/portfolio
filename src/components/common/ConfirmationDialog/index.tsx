import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
  } from '@mui/material';
import { useAppTheme } from '../../../context/theme/themeProvider';
  
  const ConfirmationDialog = () => {
    const { state, hideConfirmation } = useAppTheme();
  
    const handleConfirm = () => {
      state.confirmation.onConfirm(); // Execute the provided callback
      hideConfirmation(); // Close dialog
    };
  
    return (
      <Dialog
        open={state.confirmation.open}
        maxWidth="xs"
        fullWidth
        onClose={hideConfirmation}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px', // Rounded corners
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Subtle shadow
          },
        }}
      >
        <DialogTitle id="confirmation-dialog-title">
          {state.confirmation.title || 'Confirmation'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirmation-dialog-description">
            {state.confirmation.message || 'Are you sure?'}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ gap: 1}}>
          <Button onClick={hideConfirmation} color="inherit" sx={{
            borderRadius: '16px',
          }}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained" sx={{
            borderRadius: '16px',
          }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmationDialog;