'use client';

import { X } from 'lucide-react';
import { usePassport } from './passport-provider';

interface LifeQRModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LifeQRModal({ isOpen, onClose }: LifeQRModalProps) {
    const { passportData, hasPassport } = usePassport();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5 text-slate-600" />
                </button>

                <div className="flex flex-col items-center space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        🚨 Emergency Mode Active
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900">LifeQR</h2>

                    {/* Simulated QR Code */}
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                        <div className="w-40 h-40 bg-white rounded-lg grid grid-cols-8 gap-1 p-2">
                            {Array.from({ length: 64 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`${Math.random() > 0.5 ? 'bg-slate-900' : 'bg-white'
                                        } rounded-sm`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* User Information from Passport */}
                    <div className="w-full bg-slate-50 rounded-xl p-4 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Name:</span>
                            <span className="font-semibold text-slate-900">{passportData.fullName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Blood Type:</span>
                            <span className="font-semibold text-red-600">{passportData.bloodType}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Emergency Contact:</span>
                            <span className="font-semibold text-slate-900">{passportData.emergencyContact}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Allergies:</span>
                            <span className="font-semibold text-slate-900">{passportData.allergies}</span>
                        </div>
                    </div>

                    {!hasPassport && (
                        <p className="text-center text-sm text-amber-600 bg-amber-50 rounded-lg px-4 py-2">
                            ⚠️ Using default data. Update your passport for personalized info.
                        </p>
                    )}

                    <p className="text-center text-sm text-slate-600">
                        Show this QR code to first responders for instant access to your medical information.
                    </p>
                </div>
            </div>
        </div>
    );
}
