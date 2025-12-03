'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface RiskResultModalProps {
    isOpen: boolean;
    onClose: () => void;
    riskLevel: 'low' | 'moderate' | 'high';
    riskScore: number;
    diseaseType: string;
}

export default function RiskResultModal({
    isOpen,
    onClose,
    riskLevel,
    riskScore,
    diseaseType,
}: RiskResultModalProps) {
    const getColorClasses = () => {
        switch (riskLevel) {
            case 'low':
                return {
                    bg: 'bg-green-50',
                    border: 'border-green-500',
                    text: 'text-green-700',
                    score: 'text-green-600',
                    icon: CheckCircle,
                };
            case 'moderate':
                return {
                    bg: 'bg-yellow-50',
                    border: 'border-yellow-500',
                    text: 'text-yellow-700',
                    score: 'text-yellow-600',
                    icon: AlertTriangle,
                };
            case 'high':
                return {
                    bg: 'bg-red-50',
                    border: 'border-red-500',
                    text: 'text-red-700',
                    score: 'text-red-600',
                    icon: AlertCircle,
                };
        }
    };

    const getMessage = () => {
        switch (riskLevel) {
            case 'low':
                return 'Keep it up! Maintain a healthy lifestyle. View jogging paths in your area.';
            case 'moderate':
                return 'Visit your Barangay Health Center for a blood pressure check and consultation.';
            case 'high':
                return 'Consult a doctor immediately. Consider activating your LifeQR for emergency preparedness.';
        }
    };

    const colors = getColorClasses();
    const Icon = colors.icon;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6 text-slate-600" />
                        </button>

                        {/* Header */}
                        <div className="bg-slate-900 text-white p-8 text-center">
                            <h2 className="text-3xl font-bold">Risk Analysis Complete</h2>
                            <p className="text-slate-300 mt-2">{diseaseType}</p>
                        </div>

                        {/* Body */}
                        <div className="p-8">
                            {/* Circular Score */}
                            <div className="flex flex-col items-center mb-8">
                                <div
                                    className={`relative w-48 h-48 rounded-full border-8 ${colors.border} ${colors.bg} flex flex-col items-center justify-center`}
                                >
                                    <Icon className={`w-16 h-16 ${colors.score} mb-2`} />
                                    <span className={`text-4xl font-bold ${colors.score}`}>
                                        {riskLevel === 'low' ? 'Low' : riskLevel === 'moderate' ? 'Moderate' : 'High'}
                                    </span>
                                    <span className="text-sm text-slate-600 mt-1">Risk Level</span>
                                </div>
                                <div className="mt-6 text-center">
                                    <p className={`text-lg ${colors.text} font-semibold mb-2`}>Score: {riskScore} points</p>
                                    <p className="text-slate-600 leading-relaxed px-4">{getMessage()}</p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <button
                                    onClick={onClose}
                                    className="flex-1 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-xl transition-colors"
                                >
                                    Close
                                </button>
                                <button className="flex-1 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors">
                                    Save to Profile
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
