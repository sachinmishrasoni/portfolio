import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

interface ConfirmationDialogProps {
  open?: boolean;
  title?: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open = false,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth
      onClose={onCancel}
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
        {title || 'Confirmation'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirmation-dialog-description">
          {message || 'Are you sure?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: 1 }}>
        <Button onClick={onCancel} color="inherit" sx={{
          borderRadius: '16px',
        }}>
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained" sx={{
          borderRadius: '16px',
        }}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;