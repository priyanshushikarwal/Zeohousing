import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    User,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        console.log("Initiating Google Sign In...");
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Sign In Successful", result.user);
        } catch (error: any) {
            console.error("Error signing in with Google", error);
            console.error("Error Code:", error.code);
            console.error("Error Message:", error.message);

            let errorMessage = "Login Failed";
            if (error.code === 'auth/unauthorized-domain') {
                errorMessage = "This domain (localhost) is not authorized in Firebase Console. Please add it to Authentication > Settings > Authorized Domains.";
            } else if (error.code === 'auth/configuration-not-found') {
                errorMessage = "Firebase configuration not found. Check your .env.local file.";
            } else {
                errorMessage = `Login Failed: ${error.message}`;
            }

            alert(errorMessage);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
