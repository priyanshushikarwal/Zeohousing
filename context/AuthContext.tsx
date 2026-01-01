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
        if (!auth) {
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (!auth) {
        return (
            <div className="min-h-screen bg-[#050510] flex items-center justify-center p-4">
                <div className="max-w-md text-center space-y-4">
                    <h1 className="text-2xl font-bold text-red-500">Configuration Error</h1>
                    <p className="text-gray-400">
                        Firebase has not been initialized correctly.
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded text-left text-sm text-red-300 font-mono">
                        <p>Missing Environment Variables.</p>
                        <p className="mt-2 text-xs text-gray-500">
                            If you are on Vercel, please add your Firebase keys in Settings &gt; Environment Variables.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

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

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-purple-400 font-mono animate-pulse">Initializing System...</p>
                </div>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
            {children}
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
