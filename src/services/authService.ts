import { auth, googleProvider } from "../lib/firebase";
import {
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
    linkWithPopup,
} from "firebase/auth";

const allowedEmail = import.meta.env.VITE_ADMIN_EMAIL; // Allowed email

export const linkGoogleToAdmin = async (email: string, password: string) => {
    try {
        // Sign in with email/password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user.email !== allowedEmail) {
            await auth.signOut();
            throw new Error("Only the admin can link their Google account.");
        }

        // Link Google provider
        await linkWithPopup(user, googleProvider);
        console.log("Google provider linked successfully!");
        return user;
    } catch (error: any) {
        console.error("Linking error:", error.code, error.message);
        throw new Error(error.message || "Failed to link Google provider.");
    }
};

/** Login with Email & Password */
export const loginWithEmail = async (email: string, password: string) => {
    if (email !== allowedEmail) {
        throw new Error("This email is not allowed to log in.");
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user.email !== allowedEmail) {
            throw new Error("Only the admin can link their Google account.");
        }

        return user;
    } catch (error: any) {
        console.error("Email login error:", error.code, error.message);
        throw new Error(error.message || "Invalid credentials. Please check your email and password.");
    }
};

/** Login with Google (Restricted to Registered Users) */
export const loginWithGoogle = async () => {
    try {

        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        if (user.email !== allowedEmail) {
            await deleteUser(user); // Delete the user if not allowed
            await signOut(auth);    // Ensure session is cleared
            throw new Error("Your account is not authorized to log in.");
        }

        return user;
    } catch (error: any) {
        // Handle any errors during sign-in or deletion
        throw new Error(error.message || "Google login failed.");
    }
};

/** Logout */
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout error:", error);
        throw new Error("Logout failed. Please try again.");
    }
};
