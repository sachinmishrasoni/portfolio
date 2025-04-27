import React from "react";
import { Breadcrumbs, Link, Typography, SxProps, Theme } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";

// ✅ Define Props Interface
interface BreadcrumbItem {
    label: string;
    href?: string; // Optional link for clickable breadcrumbs
    isLast?: boolean; // Mark the last item (non-clickable)
}

interface CustomBreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode; // Custom separator icon
    sx?: SxProps<Theme>; // Allow custom styling
}

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({
    items,
    separator = <FaChevronRight size={12} />, // Changed to size prop for react-icons
    sx,
}) => {
    return (
        <Breadcrumbs
            separator={separator}
            aria-label="breadcrumb"
            sx={{
                "& .MuiBreadcrumbs-separator": {
                    color: (theme) => theme.palette.text.secondary,
                },
                ...sx, // Merge custom styles
            }}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1 || item.isLast;

                // If it's the last item or has no href, render as Typography
                if (isLast || !item.href) {
                    return (
                        <Typography
                            key={item.label}
                            // color="text.primary"
                            sx={{ fontWeight: isLast ? "medium" : "normal" }}
                        >
                            {item.label}
                        </Typography>
                    );
                }

                // If it has an href and isn't the last item, render as Link
                return (
                    <Link
                        key={item.label}
                        underline="hover"
                        color="inherit"
                        href={item.href}
                        sx={{
                            color: (theme) => theme.palette.text.secondary,
                            "&:hover": {
                                color: (theme) => theme.palette.primary.main,
                            },
                        }}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default CustomBreadcrumb;
