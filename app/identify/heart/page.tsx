'use client';

import Link from 'next/link';
import { ArrowLeft, Heart, AlertTriangle, Phone, Activity, Zap, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeartAttackPage() {
    const symptoms = [
        {
            icon: Activity,
            title: 'Chest Discomfort',
            description: 'Pressure, squeezing, fullness, or pain in the center/left side of chest lasting more than a few minutes',
        },
        {
            icon: User,
            title: 'Upper Body Pain',
            description: 'Pain or discomfort in arms, back, neck, jaw, or stomach',
        },
        {
            icon: Zap,
            title: 'Shortness of Breath',
            description: 'With or without chest pain, may feel like can\'t catch your breath',
        },
        {
            icon: AlertTriangle,
            title: 'Other Signs',
            description: 'Cold sweat, nausea, lightheadedness, or sudden fatigue',
        },
    ];

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/identify"
                    className="inline-flex items-center text-slate-600 hover:text-sky-500 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Menu
                </Link>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 text-red-800 rounded-full font-bold mb-4">
                        <Heart className="w-5 h-5" />
                        CARDIAC EMERGENCY
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Heart Attack Identification</h1>
                    <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                        Recognize the warning signs and act fast
                    </p>
                </motion.div>

                {/* Symptoms Grid */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Warning Signs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {symptoms.map((symptom, index) => {
                            const Icon = symptom.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border-4 border-red-200 rounded-2xl p-8 hover:border-red-400 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{symptom.title}</h3>
                                            <p className="text-slate-700 text-lg">{symptom.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-red-600 text-white rounded-2xl p-8 text-center shadow-2xl mb-12"
                >
                    <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">IF YOU SUSPECT A HEART ATTACK</h3>
                    <p className="text-xl mb-6">Call emergency services immediately. Do not drive yourself.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:911"
                            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-red-50 transition-colors"
                        >
                            <Phone className="w-6 h-6" />
                            Call 911
                        </a>
                        <a
                            href="tel:0544732326"
                            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-red-50 transition-colors"
                        >
                            <Phone className="w-6 h-6" />
                            (054) 473-2326
                        </a>
                    </div>
                </motion.div>

                {/* Important Notes */}
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Important Notes</h3>
                    <ul className="space-y-3 text-lg text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Women</strong> may experience different symptoms: unusual fatigue, sleep disturbances, shortness of breath, indigestion</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span>Chew <strong>aspirin</strong> if available while waiting for help (unless allergic)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Time is muscle</strong> - every minute counts to save heart tissue</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span>Do not wait to see if symptoms go away</span>
                        </li>
                    </ul>
                </div>

                {/* Disclaimer */}
                <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>Disclaimer:</strong> This tool is for educational purposes only.{' '}
                        <strong className="text-red-600">Always call emergency services if you suspect a heart attack.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
