'use client';

import Link from 'next/link';
import { ArrowLeft, Baby, AlertTriangle, Phone, Thermometer, Wind, Droplets, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChildEmergencyPage() {
    const emergencies = [
        {
            icon: Thermometer,
            title: 'High Fever in Infants',
            age: '< 3 months',
            description: 'Rectal temp ≥ 38°C',
            action: 'Go to ER immediately',
            color: 'bg-red-500',
        },
        {
            icon: Wind,
            title: 'Difficulty Breathing',
            age: 'All ages',
            description: 'Fast breathing, gasping, blue lips, chest indrawing',
            action: 'Call 911 now',
            color: 'bg-red-500',
        },
        {
            icon: Droplets,
            title: 'Severe Dehydration',
            age: 'All ages',
            description: 'No tears, dry mouth, no wet diapers for 8+ hours, sunken eyes',
            action: 'Seek medical care urgently',
            color: 'bg-orange-500',
        },
        {
            icon: Zap,
            title: 'Seizures',
            age: 'All ages',
            description: 'Uncontrolled shaking, loss of consciousness',
            action: 'Call 911, protect from injury',
            color: 'bg-red-500',
        },
        {
            icon: AlertTriangle,
            title: 'Lethargy/Unresponsive',
            age: 'All ages',
            description: 'Unusually sleepy, won\'t wake up, not alert',
            action: 'Go to ER immediately',
            color: 'bg-red-500',
        },
        {
            icon: Baby,
            title: 'Severe Vomiting/Diarrhea',
            age: '< 2 years',
            description: 'Persistent vomiting, can\'t keep fluids down, bloody stool',
            action: 'Seek medical attention',
            color: 'bg-orange-500',
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
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-teal-100 text-teal-800 rounded-full font-bold mb-4">
                        <Baby className="w-5 h-5" />
                        PEDIATRIC EMERGENCIES
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Child Emergency Signs</h1>
                    <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                        Recognize when to seek immediate medical help for children
                    </p>
                </motion.div>

                {/* Emergencies Grid */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">When to Seek Help Immediately</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {emergencies.map((emergency, index) => {
                            const Icon = emergency.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border-4 border-teal-200 rounded-2xl p-6 hover:border-teal-400 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-16 h-16 ${emergency.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-xl font-bold text-slate-800">{emergency.title}</h3>
                                                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">
                                                    {emergency.age}
                                                </span>
                                            </div>
                                            <p className="text-slate-700 mb-2">{emergency.description}</p>
                                            <p className="text-red-600 font-bold text-sm">→ {emergency.action}</p>
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
                    className="bg-teal-600 text-white rounded-2xl p-8 text-center shadow-2xl mb-12"
                >
                    <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">TRUST YOUR INSTINCT</h3>
                    <p className="text-xl mb-6">If something feels wrong, seek medical help. Parents know their children best.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:911"
                            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-teal-50 transition-colors"
                        >
                            <Phone className="w-6 h-6" />
                            Call 911
                        </a>
                        <a
                            href="tel:0544732326"
                            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-teal-50 transition-colors"
                        >
                            <Phone className="w-6 h-6" />
                            (054) 473-2326
                        </a>
                    </div>
                </motion.div>

                {/* Additional Guidelines */}
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Additional Red Flags</h3>
                    <ul className="space-y-3 text-lg text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Severe headache</strong> with stiff neck, vomiting, or confusion</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Rash with fever</strong> that doesn't fade when pressed</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Persistent crying</strong> that won't stop (especially in infants)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Injury to head</strong> followed by drowsiness or vomiting</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Ingestion</strong> of unknown substance or medication</span>
                        </li>
                    </ul>
                </div>

                {/* Fever Quick Reference */}
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Fever Quick Reference</h3>
                    <ul className="space-y-2 text-lg text-slate-700">
                        <li><strong>0-3 months:</strong> Any fever ≥38°C → ER immediately</li>
                        <li><strong>3-6 months:</strong> Fever ≥38.3°C → Call doctor</li>
                        <li><strong>6+ months:</strong> Fever ≥39.4°C or lasting &gt;3 days → Seek care</li>
                    </ul>
                </div>

                {/* Disclaimer */}
                <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>Disclaimer:</strong> This is a general guide only.{' '}
                        <strong className="text-red-600">Always trust your parental instinct and seek help when concerned.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
