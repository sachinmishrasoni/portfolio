import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../lib/firebase';
import Loader from '../../../components/common/Loader';
import { useAppTheme } from '../../../context/theme/themeProvider';

const Logout = () => {
    const navigate = useNavigate();
    const { showToast } = useAppTheme();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await signOut(auth);
                navigate('/', { replace: true }); // Redirect to login page after logout
                showToast('Logout successful!', 'success');
            } catch (error) {
                console.error('Logout failed:', error);
                showToast('Logout failed. Please try again.', 'error');
            }
        };

        handleLogout();
    }, [navigate]);

    return <Loader />; // Show a message while logging out
};

export default Logout;
