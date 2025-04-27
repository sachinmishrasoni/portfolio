import React from "react";
import { InputAdornment } from "@mui/material";
import { alpha } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

// Define Props Interface
interface CustomDatePickerProps {
    label: string;
    value: Date | null; // Expect Date from parent form
    onChange: (date: Date | null) => void; // Return Date to parent form
    error?: boolean;
    errorMessage?: string;
    prefixIcon?: React.ReactNode;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    label,
    value,
    onChange,
    error,
    errorMessage = "",
    prefixIcon,
}) => {
    // Convert Date to Dayjs for DatePicker, or null if no value
    const dayJsValue = value ? dayjs(value) : null;

    // Convert Dayjs back to Date for the parent form
    const handleChange = (newValue: Dayjs | null) => {
        const dateValue = newValue ? newValue.toDate() : null;
        onChange(dateValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={dayJsValue} // Pass Dayjs to DatePicker
                onChange={handleChange} // Convert Dayjs to Date
                slotProps={{
                    textField: {
                        fullWidth: true,
                        autoComplete: "off",
                        error: error,
                        helperText: error ? errorMessage : "",
                        sx: {
                            borderRadius: "15px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                                backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.3),
                                backdropFilter: "blur(5px)",
                            },
                            "& .MuiButtonBase-root": {
                                color: "primary.main",
                            },
                        },
                        InputProps: {
                            startAdornment: prefixIcon && (
                                <InputAdornment position="start">{prefixIcon}</InputAdornment>
                            ),
                        },
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default CustomDatePicker;
