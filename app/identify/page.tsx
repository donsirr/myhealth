'use client';

import Link from 'next/link';
import { ArrowLeft, Smile, UserX, MessageCircle, Clock, AlertTriangle, Phone, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function IdentifyPage() {
    const [selectedChecks, setSelectedChecks] = useState<string[]>([]);

    const fastChecks = [
        {
            id: 'face',
            letter: 'F',
            title: 'Face',
            question: 'Does one side of the face droop?',
            instruction: 'Ask the person to smile.',
            icon: Smile,
            color: 'bg-red-500',
        },
        {
            id: 'arms',
            letter: 'A',
            title: 'Arms',
            question: 'Does one arm drift downward?',
            instruction: 'Ask them to raise both arms.',
            icon: UserX,
            color: 'bg-orange-500',
        },
        {
            id: 'speech',
            letter: 'S',
            title: 'Speech',
            question: 'Is speech slurred or strange?',
            instruction: 'Ask them to repeat a simple phrase.',
            icon: MessageCircle,
            color: 'bg-amber-500',
        },
        {
            id: 'time',
            letter: 'T',
            title: 'Time',
            question: 'If YES to ANY above → Call 911 IMMEDIATELY',
            instruction: 'Time is brain. Every second counts.',
            icon: Clock,
            color: 'bg-rose-600',
        },
    ];

    const toggleCheck = (id: string) => {
        setSelectedChecks(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const hasSymptoms = selectedChecks.length > 0 && !selectedChecks.includes('time');

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-600 hover:text-sky-500 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>

                {/* Hero - Urgent Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 text-red-800 rounded-full font-bold mb-4">
                        <AlertTriangle className="w-5 h-5" />
                        TIME-SENSITIVE EMERGENCY
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Stroke Identification Tool</h1>
                    <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                        Learn to recognize stroke symptoms using the <span className="font-bold text-red-600">F.A.S.T.</span> method
                    </p>
                </motion.div>

                {/* F.A.S.T. Interactive Cards */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                        The F.A.S.T. Check
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fastChecks.map((check) => {
                            const Icon = check.icon;
                            const isSelected = selectedChecks.includes(check.id);
                            const isTime = check.id === 'time';

                            return (
                                <motion.button
                                    key={check.id}
                                    onClick={() => !isTime && toggleCheck(check.id)}
                                    disabled={isTime}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`text-left p-8 rounded-2xl border-4 transition-all duration-300 ${isTime
                                            ? 'bg-rose-50 border-rose-600 cursor-default'
                                            : isSelected
                                                ? 'bg-red-50 border-red-500 shadow-xl'
                                                : 'bg-white border-slate-200 hover:border-red-300 hover:shadow-lg'
                                        }`}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`flex-shrink-0 w-20 h-20 ${check.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`text-4xl font-black ${isTime ? 'text-rose-600' : 'text-slate-800'}`}>
                                                    {check.letter}
                                                </span>
                                                <h3 className="text-2xl font-bold text-slate-800">{check.title}</h3>
                                            </div>
                                            <p className="text-lg font-semibold text-slate-700 mb-2">{check.question}</p>
                                            <p className="text-slate-600">{check.instruction}</p>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Emergency Call to Action */}
                    {hasSymptoms && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-8 bg-red-600 text-white rounded-2xl p-8 text-center shadow-2xl"
                        >
                            <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold mb-4">CALL EMERGENCY SERVICES NOW</h3>
                            <p className="text-xl mb-6">Every second counts. Do not wait for symptoms to improve.</p>
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
                    )}
                </section>

                {/* Is it Reversible? Educational Section */}
                <section className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 border-4 border-blue-200 rounded-2xl p-8"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Info className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800 mb-4">Is Stroke Reversible?</h2>
                                <div className="space-y-4 text-lg text-slate-700">
                                    <p className="font-semibold text-blue-700">
                                        <span className="text-2xl">⏰</span> TIME IS BRAIN
                                    </p>
                                    <p>
                                        Many strokes (especially <strong>ischemic strokes</strong> caused by blood clots) are{' '}
                                        <strong className="text-green-700">REVERSIBLE</strong> if treated within{' '}
                                        <strong className="text-red-700">3-4.5 hours</strong>.
                                    </p>
                                    <p>
                                        Modern treatments like <strong>tPA (clot-busting drugs)</strong> and{' '}
                                        <strong>mechanical thrombectomy</strong> can restore blood flow and prevent permanent brain damage.
                                    </p>
                                    <div className="bg-white border-2 border-blue-300 rounded-xl p-6 mt-4">
                                        <p className="font-bold text-red-600 text-xl mb-2">⚠️ DO NOT WAIT</p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Do not wait for symptoms to improve on their own</li>
                                            <li>Do not drive yourself to the hospital</li>
                                            <li>Call 911 immediately - paramedics can start treatment en route</li>
                                            <li>Note the time when symptoms first appeared</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 text-center"
                >
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>Disclaimer:</strong> This tool is for educational identification only and is designed for laypeople,
                        NOT for medical diagnosis. It does not replace professional medical evaluation.{' '}
                        <strong className="text-red-600">When in doubt, go to the ER immediately.</strong>
                    </p>
                </motion.div>

                {/* Additional Resources */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6"
                >
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Emergency Contact</h3>
                    <div className="flex items-center gap-2 text-slate-700">
                        <Phone className="w-5 h-5 text-sky-500" />
                        <span className="font-semibold">Naga City Health Office:</span>
                        <a href="tel:0544732326" className="text-sky-500 hover:text-sky-600 font-bold">
                            (054) 473-2326
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
