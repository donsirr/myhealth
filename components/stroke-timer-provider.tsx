'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, X } from 'lucide-react';

interface StrokeTimerContextType {
    timerActive: boolean;
    timerSeconds: number;
    startTimer: () => void;
    stopTimer: () => void;
    formatTime: (seconds: number) => string;
}

const StrokeTimerContext = createContext<StrokeTimerContextType | undefined>(undefined);

export function useStrokeTimer() {
    const context = useContext(StrokeTimerContext);
    if (!context) {
        throw new Error('useStrokeTimer must be used within StrokeTimerProvider');
    }
    return context;
}

export default function StrokeTimerProvider({ children }: { children: ReactNode }) {
    const [timerActive, setTimerActive] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const pathname = usePathname();

    // Check if we're on the stroke page
    const isOnStrokePage = pathname === '/identify/stroke';

    // Timer logic - persists across page changes
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (timerActive) {
            interval = setInterval(() => {
                setTimerSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [timerActive]);

    const startTimer = () => {
        if (!timerActive) {
            setTimerActive(true);
            setTimerSeconds(0);
        }
    };

    const stopTimer = () => {
        setTimerActive(false);
        setTimerSeconds(0);
    };

    // Format timer as MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <StrokeTimerContext.Provider value={{ timerActive, timerSeconds, startTimer, stopTimer, formatTime }}>
            {children}

            {/* Floating Toast Timer - Only show when NOT on stroke page */}
            <AnimatePresence>
                {timerActive && !isOnStrokePage && (
                    <motion.div
                        initial={{ opacity: 0, x: 400 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 400 }}
                        className="fixed bottom-6 right-6 z-[9999]"
                    >
                        <div className="bg-red-600 text-white rounded-2xl shadow-2xl min-w-[340px] relative overflow-hidden">
                            {/* Close button */}
                            <button
                                onClick={stopTimer}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-700 transition-colors z-10"
                                aria-label="Stop timer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Timer Content */}
                            <div className="p-6">
                                <p className="text-xs font-bold mb-3 uppercase tracking-wider">Symptom Detected - Time is Brain</p>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-shrink-0">
                                        <Clock className="w-14 h-14 animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-6xl font-black tabular-nums leading-none">{formatTime(timerSeconds)}</p>
                                    </div>
                                </div>

                                <p className="text-sm font-semibold">
                                    Call (054) 473-2326 or 911 immediately!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </StrokeTimerContext.Provider>
    );
}
