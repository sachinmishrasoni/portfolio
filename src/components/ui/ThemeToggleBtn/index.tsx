import { RootState } from '@/store';
import { toggleTheme } from '@/store/features/theme/themeSlice';
import { IconButton, Tooltip, Box } from '@mui/material';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggleBtn = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <Tooltip arrow title={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}>
      <IconButton onClick={() => dispatch(toggleTheme())} sx={{ position: "relative", width: 40, height: 40, color: 'primary.contrastText', }}>
        {/* Ensures consistent button size */}
        <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
          <AnimatePresence mode="wait">
            {mode === 'dark' ? (
              <motion.span
                key="light"
                initial={{ opacity: 0.2, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0.2, scale: 0.5, rotate: 90 }}
                transition={{ duration: 0.2 }}
                style={{ position: "absolute", lineHeight: 0 }}
              >
                <MdOutlineLightMode size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="dark"
                initial={{ opacity: 0.2, scale: 0.5, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0.2, scale: 0.5, rotate: -90 }}
                transition={{ duration: 0.2 }}
                style={{ position: "absolute", lineHeight: 0 }}
              >
                <MdOutlineDarkMode size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </Box>
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggleBtn;
