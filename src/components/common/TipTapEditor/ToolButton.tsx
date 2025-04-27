import React from 'react';
import { Editor } from '@tiptap/react';
import { IconButton, Tooltip, alpha } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { IconType } from 'react-icons';

// Define props interface
interface ToolButtonProps {
    title: string;
    icon: IconType;
    editor: Editor | null;
    command?: () => void; // Command to execute
    isActive?: () => boolean; // Check if command is active
    canExecute?: () => boolean; // Check if command can be executed
}

const ToolButton: React.FC<ToolButtonProps> = ({
    title,
    icon: Icon,
    editor,
    command,
    isActive,
    canExecute,
}) => {
    if (!editor) {
        return null;
    }

    const handleClick = () => {
        if (command && editor) {
            command();
        }
    };

    const isButtonActive = isActive ? isActive() : false;
    const isButtonDisabled = canExecute ? !canExecute() : false;

    return (
        <Tooltip title={title}>
            <span>
                <IconButton
                    onClick={handleClick}
                    disabled={isButtonDisabled}
                    // color={isButtonActive ? 'primary' : 'default'}
                    sx={{
                        backgroundColor: (theme: Theme) =>
                            isButtonActive
                                ? alpha(theme.palette.primary.main, 0.3)
                                : alpha(theme.palette.grey[500], 0.1),
                        borderRadius: 2,
                        '&:hover': {
                            backgroundColor: (theme: Theme) =>
                                alpha(theme.palette.primary.main, 0.5),
                        },
                        // padding: '6px', // Adjust size as needed
                    }}
                >
                    <Icon fontSize={17} />
                </IconButton>
            </span>
        </Tooltip>
    );
};

export default ToolButton;
