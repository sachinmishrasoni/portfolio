import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase';
import Loader from '../common/Loader';
import { ALLOWED_EMAIL } from '../../constant';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [user, loading] = useAuthState(auth); // Firebase auth state

    if (loading) return <Loader />; // Show loading while checking auth state

    if (!user || user.email !== ALLOWED_EMAIL) {
        return <Navigate to="/auth/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
