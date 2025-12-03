'use client';

import Link from 'next/link';
import { ArrowLeft, Smile, UserX, MessageCircle, Clock, AlertTriangle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useStrokeTimer } from '@/components/stroke-timer-provider';

export default function StrokePage() {
    const [selectedChecks, setSelectedChecks] = useState<string[]>([]);
    const { timerActive, timerSeconds, startTimer, stopTimer, formatTime } = useStrokeTimer();

    // Reset selections when timer stops (from toast close button)
    useEffect(() => {
        if (!timerActive && selectedChecks.length > 0) {
            setSelectedChecks([]);
        }
    }, [timerActive]);

    const fastChecks = [
        {
            id: 'face',
            letter: 'F',
            title: 'Face',
            question: 'Does one side of the face droop?',
            instruction: 'Ask the person to smile.',
            icon: Smile,
            color: 'bg-purple-500',
        },
        {
            id: 'arms',
            letter: 'A',
            title: 'Arms',
            question: 'Does one arm drift downward?',
            instruction: 'Ask them to raise both arms.',
            icon: UserX,
            color: 'bg-purple-500',
        },
        {
            id: 'speech',
            letter: 'S',
            title: 'Speech',
            question: 'Is speech slurred or strange?',
            instruction: 'Ask them to repeat a simple phrase.',
            icon: MessageCircle,
            color: 'bg-purple-500',
        },
        {
            id: 'time',
            letter: 'T',
            title: 'Time',
            question: 'Call (054) 473-2326 IMMEDIATELY',
            instruction: 'Time is brain. Every second counts.',
            icon: Clock,
            color: 'bg-rose-600',
        },
    ];

    const toggleCheck = (id: string) => {
        const newChecks = selectedChecks.includes(id)
            ? selectedChecks.filter(c => c !== id)
            : [...selectedChecks, id];

        setSelectedChecks(newChecks);

        // Start global timer if any F, A, or S is selected
        if (!timerActive && newChecks.some(c => ['face', 'arms', 'speech'].includes(c))) {
            startTimer();
        }

        // Stop timer if all deselected
        if (newChecks.length === 0) {
            stopTimer();
        }
    };

    const hasSymptoms = selectedChecks.some(c => ['face', 'arms', 'speech'].includes(c));

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

                {/* Active Timer - Shows at top when symptoms detected (ON STROKE PAGE) */}
                <AnimatePresence>
                    {timerActive && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mb-8 bg-red-600 text-white rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="flex items-center justify-center gap-6">
                                <Clock className="w-10 h-10 flex-shrink-0 animate-pulse" />
                                <div className="text-center">
                                    <p className="text-sm font-semibold mb-1">SYMPTOM DETECTED - TIME IS BRAIN</p>
                                    <p className="text-6xl font-black tabular-nums leading-none">{formatTime(timerSeconds)}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-center">Call (054) 473-2326 or 911 immediately!</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hero - Urgent Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 text-purple-800 rounded-full font-bold mb-4">
                        <AlertTriangle className="w-5 h-5" />
                        BRAIN EMERGENCY
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Stroke Identification</h1>
                    <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                        Use the <span className="font-bold text-purple-600">F.A.S.T.</span> method to identify stroke symptoms
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
                                    className={`text-left p-8 rounded-2xl border-4 transition-all duration-300 ${isTime && timerActive
                                        ? 'bg-red-600 border-red-600 cursor-default text-white'
                                        : isTime
                                            ? 'bg-slate-50 border-slate-300 cursor-default'
                                            : isSelected
                                                ? 'bg-purple-50 border-purple-500 shadow-xl'
                                                : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-lg'
                                        }`}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`flex-shrink-0 w-20 h-20 ${isTime && timerActive ? 'bg-white text-red-600' : check.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <Icon className={`w-10 h-10 ${isTime && timerActive ? 'text-red-600' : 'text-white'}`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`text-4xl font-black ${isTime && timerActive ? 'text-white' : isTime ? 'text-slate-400' : 'text-slate-800'}`}>
                                                    {check.letter}
                                                </span>
                                                <h3 className={`text-2xl font-bold ${isTime && timerActive ? 'text-white' : 'text-slate-800'}`}>{check.title}</h3>
                                            </div>
                                            <p className={`text-lg font-semibold mb-2 ${isTime && timerActive ? 'text-white' : 'text-slate-700'}`}>{check.question}</p>
                                            <p className={`${isTime && timerActive ? 'text-white/90' : 'text-slate-600'}`}>{check.instruction}</p>
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

                {/* Education Section - Always Visible */}
                <section className="mb-12">
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Is Stroke Reversible?</h2>
                        <div className="space-y-4 text-lg text-slate-700">
                            <p className="font-semibold text-blue-700 text-2xl">
                                ⏰ TIME IS BRAIN
                            </p>
                            <p>
                                Yes! Many strokes (especially <strong>ischemic strokes</strong> caused by blood clots) are{' '}
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
                                    <li>Do not "sleep it off" - this can be fatal</li>
                                    <li>Do not drive yourself to the hospital</li>
                                    <li>Call 911 immediately - paramedics start treatment en route</li>
                                    <li>Note the exact time symptoms first appeared</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 text-center"
                >
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>Disclaimer:</strong> This tool is for educational identification only.{' '}
                        <strong className="text-red-600">When in doubt, call 911 immediately.</strong>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
