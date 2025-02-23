import { Box } from '@mui/material';
import { SxProps, useTheme } from '@mui/material/styles';

interface BlobDivProps {
    sx?: SxProps;
}
const BlobDiv = ({ sx }: BlobDivProps) => {
    const theme = useTheme();

    return (
        <Box sx={{ ...sx, width: '100%', maxWidth: '800px' }}>
            <svg
                width='100%'
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // opacity={0.5}
            >
                <path
                    d="M50.3,-54.2C59.8,-40.8,58.5,-20.4,53.9,-4.6C49.3,11.2,41.5,22.5,32,37.6C22.5,52.8,11.2,71.9,-3.7,75.6C-18.6,79.3,-37.3,67.6,-53.7,52.4C-70.2,37.3,-84.5,18.6,-86.7,-2.2C-88.9,-23.1,-79,-46.1,-62.6,-59.5C-46.1,-72.9,-23.1,-76.7,-1.3,-75.3C20.4,-74,40.8,-67.6,50.3,-54.2Z"
                    fill={theme.palette.primary.main}
                    transform="translate(100 100)"
                />
            </svg>
        </Box>
    );
};

export default BlobDiv;