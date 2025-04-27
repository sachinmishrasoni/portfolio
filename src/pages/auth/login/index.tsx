import { alpha, Box, Button, Chip, Divider, Stack, Typography, useTheme } from '@mui/material';
import SpotlightPaper from '../../../components/ui/SpotlightPaper';
import CustomTextField from '../../../components/ui/CustomTextField';
import { IconList } from '../../../utils/iconList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { loginWithEmail, loginWithGoogle } from '../../../services/authService';
import { useDispatch } from 'react-redux';
import { showToast } from '@/store/features/ui/uiSlice';

// Regular Expressions for validation
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const passwordExp = /^[a-zA-Z0-9]{6,}$/;

const Login = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    // const { showToast } = useAppTheme();
    // const { login } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
    };

    // Validate form
    const validateForm = () => {
        const newErrors = { email: '', password: '' };
        let isValid = true;

        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailExp.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (!passwordExp.test(formData.password)) {
            newErrors.password = 'Password must be at least 6 characters long and contain only letters or numbers.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                // await linkGoogleToAdmin(formData.email, formData.password);
                await loginWithEmail(formData.email, formData.password);
                dispatch(showToast({ message: 'Login successful!', severity: 'success' }));
                navigate('/admin'); // Redirect to admin page
            } catch (error) {
                if (error instanceof FirebaseError) {
                    dispatch(showToast({ message: error.message, severity: 'error' }));
                } else {
                    dispatch(showToast({ message: 'Login failed. Please try again.', severity: 'error' }));
                }
            } finally {
                setLoading(false);
            }
        } else {
            dispatch(showToast({ message: 'Validation failed. Please check your inputs.', severity: 'error' }));
        }
    };

    // Handle Google login
    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            dispatch(showToast({ message: 'Google Login Successful!', severity: 'success' }));
            navigate("/admin");
        } catch (error: any) {
            dispatch(showToast({ message: error.message, severity: 'error' }));
        }
    };

    return (
        <Box
            id='login-page'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: theme =>
                    `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, 
                    ${theme.palette.background.default} 50%, 
                    ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            }}
        >
            <SpotlightPaper
                spotlightColor={alpha(theme.palette.primary.main, 0.25)}
                sx={{
                    p: 3,
                    borderRadius: 3,
                    position: 'relative',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    overflow: 'hidden',
                    zIndex: 5,
                    minWidth: '400px',
                    maxWidth: '450px', // Added maxWidth for better form sizing
                }}
            >
                <Typography variant='h5' fontWeight={'bold'} textAlign="center" mb={2}>
                    Admin Login
                </Typography>

                <Box
                    component={'form'}
                    onSubmit={handleSubmit}
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                    }}
                >
                    <CustomTextField
                        required
                        name="email"
                        type='email'
                        placeholder="Email"
                        prefixIcon={<IconList.email fontSize={20} />}
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <CustomTextField
                        required
                        name="password"
                        type='password'
                        placeholder="Password"
                        prefixIcon={<IconList.password fontSize={20} />}

                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ borderRadius: 25 }}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </Box>
                <Divider sx={{ my: 2 }}>or</Divider>
                <Stack direction={'row'} justifyContent={'center'}>
                    <Chip
                        icon={<IconList.google fontSize={20} />}
                        label="Login with Google"
                        variant="outlined"
                        color="secondary"
                        clickable
                        onClick={handleGoogleLogin}
                        sx={{ px: 2 }}
                    />
                </Stack>
            </SpotlightPaper>
        </Box>
    );
};

export default Login;