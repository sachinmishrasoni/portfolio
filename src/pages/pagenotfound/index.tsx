import { alpha, Box, Container, Typography } from '@mui/material';
import BlobDiv from '../../components/common/BlobDiv';
import { IconList } from '../../utils/iconList';
import { FaRocket, FaGhost, FaBug, FaStar, FaCompass } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PageNotFound = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Variants with delay for staggered text
  const staggeredTextVariants = (delayTime: any) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: delayTime,
      },
    },
  });

  // Animation for floating icons
  const iconVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Animation for spinning settings icon
  const spinVariants = {
    spin: {
      rotate: 360,
      transition: { duration: 4, repeat: Infinity, ease: 'linear' },
    },
  };

  // Arrays of icons for left and right sides with positions and properties
  const leftIcons = [
    { Icon: FaRocket, size: 50, color: '#ff6f61', top: '20%', left: { xs: '5%', sm: '10%', md: '15%' } },
    { Icon: FaBug, size: 45, color: '#f4a261', top: '50%', left: { xs: '2%', sm: '8%', md: '12%' } },
    { Icon: FaStar, size: 40, color: '#ffd700', top: '80%', left: { xs: '4%', sm: '9%', md: '14%' } },
  ];

  const rightIcons = [
    { Icon: FaGhost, size: 40, color: '#61dafb', top: '25%', right: { xs: '5%', sm: '10%', md: '15%' } },
    { Icon: FaCompass, size: 45, color: '#6b7280', top: '55%', right: { xs: '2%', sm: '8%', md: '12%' } },
    { Icon: FaStar, size: 35, color: '#ffd700', top: '75%', right: { xs: '4%', sm: '9%', md: '14%' } },
  ];

  return (
    <Box
      id="pagenotfound"
      minHeight={'100vh'}
      position={'relative'}
      overflow={'hidden'}
      sx={{
        background: theme =>
          `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, 
          ${theme.palette.background.default} 50%, 
          ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(3px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Container>
          {/* Animated Text */}
          <Box>
            <motion.div initial="hidden" animate="visible" variants={textVariants}>
              <Typography variant="h4" fontWeight="bold" color="text.secondary" mb={2}>
                Oops!
              </Typography>
            </motion.div>
          </Box>
          <Box>
            <motion.div initial="hidden" animate="visible" variants={staggeredTextVariants(0.2)}>
              <Typography
                variant="h1"
                fontWeight="bold"
                sx={{ fontSize: { xs: '4rem', md: '6rem' }, color: 'primary.main' }}
              >
                404
              </Typography>
            </motion.div>
          </Box>
          <Box>
            <motion.div initial="hidden" animate="visible" variants={staggeredTextVariants(0.4)}>
              <Typography variant="h4" fontWeight="bold" color="text.secondary" mt={2}>
                Page Not Found
              </Typography>
            </motion.div>
          </Box>

          {/* Subtext with bounce effect */}
          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
            >
              <Typography variant="body1" color="text.secondary" mt={3}>
                Looks like you’ve wandered into the void. Let’s get you back on track!
              </Typography>
            </motion.div>
          </Box>
        </Container>

        {/* Left Side Icons */}
        {leftIcons.map(({ Icon, size, color, top, left }, index) => (
          <Box
            key={`left-${index}`}
            sx={{
              position: 'absolute',
              top,
              left,
            }}
          >
            <motion.div variants={iconVariants} animate="float">
              <Icon size={size} color={color} />
            </motion.div>
          </Box>
        ))}

        {/* Right Side Icons */}
        {rightIcons.map(({ Icon, size, color, top, right }, index) => (
          <Box
            key={`right-${index}`}
            sx={{
              position: 'absolute',
              top,
              right,
            }}
          >
            <motion.div variants={iconVariants} animate="float">
              <Icon size={size} color={color} />
            </motion.div>
          </Box>
        ))}

        {/* Spinning Settings Icon */}
        <Box sx={{ position: 'absolute', top: '30%', left: '25%', opacity: 0.2 }}>
          <motion.div variants={spinVariants} animate="spin">
            <IconList.settings fontSize={80} />
          </motion.div>
        </Box>
      </Box>

      {/* Blob Decorations */}
      <BlobDiv
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '-400px', sm: '-700px', md: '-500px', lg: '-800px' },
          transform: 'translate(-50%, -50%) rotate(45deg)',
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <BlobDiv
        sx={{
          position: 'absolute',
          top: '80%',
          left: { xs: '-400px', sm: '-700px', md: '-500px', lg: '100px' },
          transform: 'translate(-50%, -50%) rotate(-30deg)',
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      {/* Animated Background Element */}
      <Box
        sx={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(97, 218, 251, 0.2), transparent)',
          borderRadius: '50%',
          top: '10%',
          right: '10%',
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Box>
    </Box>
  );
};

export default PageNotFound;