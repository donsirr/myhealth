'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, User, Phone, Droplet, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { usePassport } from '@/components/passport-provider';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PassportEditPage() {
    const { passportData, updatePassportData } = usePassport();
    const router = useRouter();

    const [formData, setFormData] = useState(passportData);
    const [showModal, setShowModal] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            updatePassportData(formData);
            setSaveSuccess(true);
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
                setTimeout(() => {
                    router.push('/');
                }, 300);
            }, 2000);
        } catch (error) {
            setSaveSuccess(false);
            setShowModal(true);
        }
    };

    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-50 py-12">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-600 hover:text-sky-500 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500 rounded-2xl mb-6">
                        <User className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Digital Health Passport</h1>
                    <p className="text-xl text-slate-600">
                        Create or update your emergency medical information
                    </p>
                </motion.div>

                {/* Info Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-lg shadow-sky-100"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 mb-2">Why Create a Passport?</h3>
                            <p className="text-slate-700">
                                Your LifeQR code will display this information to first responders in emergencies.
                                Keep it accurate and up-to-date.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl shadow-lg shadow-sky-100 p-8"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="flex items-center gap-2 text-base font-semibold text-slate-800 mb-3">
                                <User className="w-5 h-5 text-sky-500" />
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg text-slate-800 placeholder:text-gray-400 focus:placeholder-transparent"
                                placeholder="Juan Dela Cruz"
                                required
                            />
                        </div>

                        {/* Emergency Contact */}
                        <div>
                            <label htmlFor="emergencyContact" className="flex items-center gap-2 text-base font-semibold text-slate-800 mb-3">
                                <Phone className="w-5 h-5 text-sky-500" />
                                Emergency Contact Number
                            </label>
                            <input
                                id="emergencyContact"
                                type="tel"
                                value={formData.emergencyContact}
                                onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg text-slate-800 placeholder:text-gray-400 focus:placeholder-transparent"
                                placeholder="0917-123-4567"
                                required
                            />
                        </div>

                        {/* Blood Type */}
                        <div>
                            <label className="flex items-center gap-2 text-base font-semibold text-slate-800 mb-3">
                                <Droplet className="w-5 h-5 text-sky-500" />
                                Blood Type
                            </label>
                            <div className="grid grid-cols-4 gap-3">
                                {bloodTypes.map((type) => (
                                    <label key={type} className="relative cursor-pointer">
                                        <input
                                            type="radio"
                                            name="bloodType"
                                            value={type}
                                            checked={formData.bloodType === type}
                                            onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                                            className="peer sr-only"
                                            required
                                        />
                                        <div className="px-4 py-3 border-2 border-slate-200 rounded-xl peer-checked:border-sky-500 peer-checked:bg-sky-50 transition-all text-center font-bold text-slate-700 peer-checked:text-sky-700">
                                            {type}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Known Allergies */}
                        <div>
                            <label htmlFor="allergies" className="flex items-center gap-2 text-base font-semibold text-slate-800 mb-3">
                                <AlertCircle className="w-5 h-5 text-sky-500" />
                                Known Allergies
                            </label>
                            <textarea
                                id="allergies"
                                value={formData.allergies}
                                onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg text-slate-800 resize-none placeholder:text-gray-400 focus:placeholder-transparent"
                                placeholder="None, or list any medications/food allergies"
                                rows={3}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 text-lg"
                        >
                            <Save className="w-6 h-6" />
                            Save Passport
                        </button>
                    </form>
                </motion.div>

                {/* Privacy Note */}
                <div className="mt-8 text-center text-sm text-slate-600">
                    <p>🔒 Your data is stored locally on your device and never sent to external servers.</p>
                </div>
            </div>

            {/* Status Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl shadow-2xl p-12 max-w-md mx-4 text-center"
                        >
                            {saveSuccess ? (
                                <>
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-12 h-12 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Passport Updated</h3>
                                    <p className="text-slate-600 text-lg">You are ready.</p>
                                </>
                            ) : (
                                <>
                                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <XCircle className="w-12 h-12 text-red-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Save Failed</h3>
                                    <p className="text-slate-600 text-lg">Please check your connection.</p>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
