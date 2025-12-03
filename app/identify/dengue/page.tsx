'use client';

import Link from 'next/link';
import { ArrowLeft, Thermometer, AlertTriangle, Phone, Droplets, Gauge, Eye, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DenguePage() {
    const warningSigns = [
        {
            icon: Activity,
            title: 'Severe Abdominal Pain',
            description: 'Persistent vomiting, intense pain in stomach area',
            severity: 'critical',
        },
        {
            icon: Droplets,
            title: 'Bleeding',
            description: 'Nose bleeds, bleeding gums, vomiting blood, or blood in stool',
            severity: 'critical',
        },
        {
            icon: Gauge,
            title: 'Restlessness/Lethargy',
            description: 'Sudden behavior changes, extreme tiredness, or confusion',
            severity: 'critical',
        },
        {
            icon: Eye,
            title: 'Fluid Accumulation',
            description: 'Swelling in chest, abdomen, or difficulty breathing',
            severity: 'critical',
        },
    ];

    const commonSymptoms = [
        'High fever (40°C)',
        'Severe headache',
        'Pain behind the eyes',
        'Joint and muscle pain',
        'Rash (appears 2-5 days after fever)',
        'Mild bleeding (nose, gums)',
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
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 text-orange-800 rounded-full font-bold mb-4">
                        <Thermometer className="w-5 h-5" />
                        FEVER & WARNING SIGNS
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Dengue Identification</h1>
                    <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                        Recognize danger signs that require immediate medical attention
                    </p>
                </motion.div>

                {/* Common Symptoms */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Common Dengue Symptoms</h2>
                    <div className="bg-orange-50 border-4 border-orange-200 rounded-2xl p-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-slate-700">
                            {commonSymptoms.map((symptom, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-orange-600 font-bold text-xl">•</span>
                                    <span>{symptom}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* WARNING SIGNS - Critical */}
                <section className="mb-12">
                    <div className="bg-red-100 border-4 border-red-500 rounded-2xl p-6 mb-6">
                        <h2 className="text-3xl font-bold text-red-700 text-center flex items-center justify-center gap-3">
                            <AlertTriangle className="w-8 h-8" />
                            DANGER SIGNS - GO TO HOSPITAL IMMEDIATELY
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {warningSigns.map((sign, index) => {
                            const Icon = sign.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-red-50 border-4 border-red-400 rounded-2xl p-8 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{sign.title}</h3>
                                            <p className="text-slate-700 text-lg">{sign.description}</p>
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
                    className="bg-orange-600 text-white rounded-2xl p-8 text-center shadow-2xl mb-12"
                >
                    <h3 className="text-3xl font-bold mb-4">IF YOU SEE WARNING SIGNS</h3>
                    <p className="text-xl mb-6">Seek medical attention immediately. Dengue can become life-threatening in hours.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:911"
                            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-orange-50 transition-colors"
                        >
                            <Phone className="w-6 h-6" />
                            Call 911
                        </a>
                        <a
                            href="tel:0544732326"
                            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-orange-50 transition-colors"
                        >
                            <Phone className="w-6 h-6" />
                            (054) 473-2326
                        </a>
                    </div>
                </motion.div>

                {/* Important Notes */}
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Important Information</h3>
                    <ul className="space-y-3 text-lg text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold">•</span>
                            <span><strong>Critical period:</strong> Days 3-7 after fever starts (when fever drops, danger increases)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold">•</span>
                            <span>No specific treatment for dengue - <strong>hydration is crucial</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold">•</span>
                            <span><strong>Avoid aspirin and ibuprofen</strong> - use paracetamol for fever</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold">•</span>
                            <span>Get tested for dengue if you have sustained high fever</span>
                        </li>
                    </ul>
                </div>

                {/* Disclaimer */}
                <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>Disclaimer:</strong> This is for identification only.{' '}
                        <strong className="text-red-600">Consult a doctor if you have fever lasting more than 2 days.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
