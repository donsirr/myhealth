'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeft, Map as MapIcon, AlertTriangle, ChevronDown, ChevronUp, Shield, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamic import for Leaflet to avoid SSR issues
const DengueMap = dynamic(() => import('@/components/dengue-map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] bg-slate-100 rounded-2xl flex items-center justify-center">
            <div className="text-slate-500">Loading map...</div>
        </div>
    ),
});

export default function DenguePage() {
    const [preventionOpen, setPreventionOpen] = useState(false);

    const hotspots = [
        {
            name: 'Barangay Triangulo',
            coordinates: [13.6218, 123.1948] as [number, number],
            severity: 'high' as const,
        },
        {
            name: 'Barangay Concepcion',
            coordinates: [13.6298, 123.1898] as [number, number],
            severity: 'high' as const,
        },
        {
            name: 'Barangay San Felipe',
            coordinates: [13.6158, 123.2028] as [number, number],
            severity: 'moderate' as const,
        },
    ];

    const preventionTips = [
        {
            title: 'Eliminate Standing Water',
            items: [
                'Empty flower vases and change water daily',
                'Remove water from plant saucers',
                'Clean and scrub containers weekly',
                'Dispose of old tires and containers',
            ],
        },
        {
            title: 'Protect Your Home',
            items: [
                'Install window and door screens',
                'Use mosquito nets while sleeping',
                'Keep gutters clean and free-flowing',
                'Cover water storage containers tightly',
            ],
        },
        {
            title: 'Personal Protection',
            items: [
                'Wear long sleeves and pants during dawn/dusk',
                'Use mosquito repellent on exposed skin',
                'Apply insect repellent on clothing',
                'Avoid areas with high mosquito activity',
            ],
        },
        {
            title: 'Seek Medical Help',
            items: [
                'Consult a doctor if fever develops',
                'Watch for warning signs: severe abdominal pain, persistent vomiting',
                'Get blood tests done early',
                'Stay hydrated and rest adequately',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-600 hover:text-sky-500 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500 rounded-2xl mb-6">
                        <MapIcon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">Dengue Outbreak Radar</h1>
                    <p className="text-xl text-slate-600">
                        Real-time monitoring of dengue hotspots across Naga City
                    </p>
                </div>

                {/* Alert Banner */}
                <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-900 mb-2">High Alert Areas</h3>
                            <p className="text-red-800 text-lg">
                                Active clusters detected in <strong>Barangay Triangulo</strong> and{' '}
                                <strong>Barangay Concepcion</strong>. Residents should eliminate standing water
                                immediately and report symptoms to health centers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Real Map */}
                <div className="mb-8">
                    <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-slate-900 text-white p-6">
                            <h2 className="text-2xl font-semibold">Interactive Hotspot Map</h2>
                            <p className="text-slate-300 mt-1">Naga City, Camarines Sur</p>
                        </div>
                        <div className="p-6">
                            <DengueMap center={[13.6218, 123.1948]} zoom={13} hotspots={hotspots} />

                            {/* Legend */}
                            <div className="mt-6 flex items-center justify-center gap-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                    <span className="text-sm font-semibold text-slate-700">High Risk</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                                    <span className="text-sm font-semibold text-slate-700">Moderate Risk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prevention Tips - Accordion Style */}
                <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                    <button
                        onClick={() => setPreventionOpen(!preventionOpen)}
                        className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-slate-900">How to Protect Your Home</h3>
                                <p className="text-slate-600 mt-1">Essential prevention tips and guidelines</p>
                            </div>
                        </div>
                        {preventionOpen ? (
                            <ChevronUp className="w-6 h-6 text-slate-600" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-slate-600" />
                        )}
                    </button>

                    {preventionOpen && (
                        <div className="border-t-2 border-sky-200 p-8 bg-sky-50/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {preventionTips.map((section, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                                        <h4 className="text-lg font-bold text-slate-800 mb-4">{section.title}</h4>
                                        <ul className="space-y-3">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-slate-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Emergency Contact */}
                <div className="mt-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/90 border border-blue-200 rounded-2xl shadow-lg p-8"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6 text-sky-500" />
                            <p className="text-slate-800 text-lg font-semibold">
                                Report Dengue Cases. Contact Naga City Health Office: (054) 473-2326
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}