import React, { useState } from 'react';
import { X, Lock, ArrowRight } from 'lucide-react';
import GlassCard from './GlassCard';

interface InviteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InviteModal: React.FC<InviteModalProps> = ({ isOpen, onClose }) => {
    const [code, setCode] = useState('');
    const [status, setStatus] = useState<'idle' | 'validating' | 'error' | 'success'>('idle');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('validating');

        // Simulate validation
        setTimeout(() => {
            if (code.toLowerCase() === 'zeo2025') {
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <GlassCard className="w-full max-w-md relative z-10 neon-border-purple animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                        <Lock className="w-8 h-8 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-2">Private Access Only</h2>
                    <p className="text-gray-400 text-sm">
                        ZEOHOUSING is currently invite-only. Please enter your access code to continue.
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="text-center py-8 animate-in fade-in">
                        <div className="text-green-400 font-bold text-xl mb-2">Access Granted!</div>
                        <p className="text-gray-400 text-sm mb-6">Welcome to the elite circle.</p>
                        <button
                            onClick={onClose}
                            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all"
                        >
                            Enter Platform
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => {
                                    setCode(e.target.value);
                                    setStatus('idle');
                                }}
                                placeholder="Enter invite code"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-center font-mono tracking-widest uppercase"
                            />
                            {status === 'error' && (
                                <p className="text-red-400 text-xs mt-2 text-center">Invalid invite code. Please try again.</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={!code || status === 'validating'}
                            className="w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2"
                        >
                            {status === 'validating' ? (
                                <span className="animate-pulse">Validating...</span>
                            ) : (
                                <>
                                    Verify Code
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>

                        <div className="text-center">
                            <button type="button" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">
                                Don't have a code? Request access
                            </button>
                        </div>
                    </form>
                )}
            </GlassCard>
        </div>
    );
};

export default InviteModal;
