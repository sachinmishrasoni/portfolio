import React from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { alpha } from "@mui/system";

// ✅ Define Props Interface
interface CustomTextFieldProps extends Omit<TextFieldProps, "error"> {
    error?: boolean;
    errorMessage?: string;
    prefixIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    error,
    errorMessage = "",
    prefixIcon,
    endIcon,
    ...props
}) => {
    return (
        <TextField
            fullWidth
            autoComplete="off"
            error={error}
            helperText={error ? errorMessage : ""}
            sx={{
                borderRadius: "15px",
                "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                    backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.3),
                    backdropFilter: "blur(5px)",
                    // padding: "0px 8px 8px 8px",
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    // border: "none",
                },
                '& .MuiOutlinedInput-input': {
                    p: 1.6,
                    pl: 0,
                },
                '& .MuiInputBase-root .MuiInputBase-inputMultiline': {
                    p: 0
                }
            }}
            slotProps={{
                input: {
                    startAdornment: prefixIcon && (
                        <InputAdornment position="start">{prefixIcon}</InputAdornment>
                    ),
                    endAdornment: endIcon && (
                        <InputAdornment position="end">{endIcon}</InputAdornment>
                    ),
                },
            }}
            {...props} // Spread other props
        />
    );
};

export default CustomTextField;
