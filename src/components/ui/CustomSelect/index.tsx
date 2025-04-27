import React from "react";
import { Select, SelectProps, MenuItem, FormHelperText, FormControl } from "@mui/material";
import { alpha } from "@mui/system";

// ✅ Define Props Interface
interface CustomSelectProps extends Omit<SelectProps, "error"> {
    error?: boolean;
    errorMessage?: string;
    prefixIcon?: React.ReactNode;
    options: { value: string | number; label: string }[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    error,
    errorMessage = "",
    prefixIcon,
    options,
    ...props
}) => {
    return (
        <FormControl fullWidth error={error}>
            <Select
                autoComplete="off"
                sx={{
                    borderRadius: "15px",
                    "& .MuiOutlinedInput-root": {
                        // borderRadius: "15px",
                    },
                    "& .MuiSelect-select": {
                        // padding: "8.5px 14px",
                        borderRadius: "15px",
                        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.3),
                        backdropFilter: "blur(5px)",
                    },
                }}
                // Fix: Use InputProps instead of inputProps
                // inputProps={{
                //     startAdornment: prefixIcon && (
                //         <InputAdornment position="start">{prefixIcon}</InputAdornment>
                //     ),
                // }}
                MenuProps={{
                    sx: {
                        "& .MuiPaper-root": {
                            px: 1,
                            borderRadius: 3,
                            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.3),
                            backdropFilter: "blur(5px)",
                        },
                        "& .MuiList-root": {
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.5,
                        },
                        "& .MuiButtonBase-root": {
                            py: 1,
                            borderRadius: 2,
                        }
                    },
                }}
                {...props}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {error && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
    );
};

export default CustomSelect;
