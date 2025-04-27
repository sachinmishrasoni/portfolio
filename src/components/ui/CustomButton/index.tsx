import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

// Define the shape options
type ShapeType = 'default' | 'circle' | 'semi-round' | 'round';

// Extend ButtonProps to include the custom shape prop
interface CustomButtonProps extends ButtonProps {
  shape?: ShapeType;
}

// Styled Button with dynamic shape styling
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'shape',
})<CustomButtonProps>(({ theme, shape }) => ({
  // Default styles (applied to all shapes)
  transition: 'all 0.3s ease',
  '&:hover': {
    // boxShadow: theme.shadows[4],
  },
  // Shape-specific styles
  ...(shape === 'circle' && {
    borderRadius: '50%',
    padding: 10, // Ensure padding doesn't distort the circle
    minWidth: 0, // Allow button to be sized by content or explicit width/height
    // aspectRatio: '1 / 1', // Ensures equal width and height
  }),
  ...(shape === 'semi-round' && {
    borderRadius: '10px',
  }),
  ...(shape === 'round' && {
    borderRadius: '24px', // More pronounced rounding than default
  }),
  ...(shape === 'default' && {
    borderRadius: theme.shape.borderRadius, // Uses MUI theme's default border radius (usually 4px)
  }),
}));

const CustomButton: React.FC<CustomButtonProps> = ({
  shape = 'default', // Default shape if not specified
  children,
  ...props
}) => {
  return (
    <StyledButton shape={shape} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;