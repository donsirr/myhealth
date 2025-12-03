'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function RoadmapPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    // Green line - grows from 0% to 33%, then stays at 33%
    const greenLineHeight = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '33%', '33%']);

    // Blue line - stays at 0% until scroll 0.5, then grows from 0% to 33%
    const blueLineHeight = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '33%']);

    const phases = [
        {
            id: 1,
            phase: 'Phase 1',
            title: 'Public Beta & Awareness',
            status: 'Active',
            statusColor: 'bg-green-500',
            period: 'Current',
            description: 'Launch core features including CVD risk assessment, dengue monitoring, and wellness screening services for all Nagueños.',
            icon: CheckCircle2,
        },
        {
            id: 2,
            phase: 'Phase 2',
            title: 'Hospital Data Integration',
            status: 'Planned',
            statusColor: 'bg-blue-500',
            period: 'Q3 2025',
            description: 'Connect with local hospitals and health centers to provide real-time bed availability, appointment scheduling, and health record access.',
            icon: Clock,
        },
        {
            id: 3,
            phase: 'Phase 3',
            title: 'PhilSys National ID Sync',
            status: 'Future',
            statusColor: 'bg-slate-400',
            period: '2026',
            description: 'Integrate with the Philippine Identification System for seamless identity verification and personalized health profiles nationwide.',
            icon: Rocket,
        },
    ];

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

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Future Roadmap</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Building a long-term, sustainable civic health platform for Naga City and beyond
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={containerRef} className="relative">
                    {/* Static Vertical Line (Full) */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 md:left-1/2 md:-ml-0.5" />

                    {/* Green Line (Phase 1) - Solid green from 0% to 33% */}
                    <motion.div
                        className="absolute left-8 top-0 w-1 bg-green-500 md:left-1/2 md:-ml-0.5"
                        style={{ height: greenLineHeight }}
                    />

                    {/* Blue Line (Phase 2) - Solid blue starting at 33%, growing to 66% */}
                    <motion.div
                        className="absolute left-8 w-1 bg-blue-500 md:left-1/2 md:-ml-0.5"
                        style={{
                            top: '33%',
                            height: blueLineHeight
                        }}
                    />

                    {/* Dashed Line from Phase 2 to Phase 3 (Static Gray) */}
                    <div
                        className="absolute left-8 w-1 border-l-2 border-dashed border-slate-300 md:left-1/2 md:-ml-0.5"
                        style={{ top: '66%', bottom: 0 }}
                    />

                    {/* Timeline Items - Zig-Zag Pattern */}
                    <div className="space-y-12">
                        {phases.map((item, index) => {
                            const Icon = item.icon;
                            const isLeftAligned = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: isLeftAligned ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    {/* Mobile Layout */}
                                    <div className="md:hidden">
                                        <div className="flex items-start gap-6">
                                            <div className={`flex-shrink-0 w-16 h-16 rounded-full ${item.statusColor} flex items-center justify-center z-10 shadow-lg`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 hover:shadow-xl shadow-lg shadow-sky-100 transition-all">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-sm font-semibold text-slate-500">{item.phase}</span>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.statusColor}`}>
                                                        {item.status}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                                <p className="text-sm text-sky-500 font-semibold mb-4">{item.period}</p>
                                                <p className="text-slate-700 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Layout - Flexbox Zig-Zag */}
                                    <div className="hidden md:flex items-center gap-12">
                                        {/* Left Side (Text on left for even indices) */}
                                        <div className="flex-1">
                                            {isLeftAligned && (
                                                <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 hover:shadow-xl shadow-lg shadow-sky-100 transition-all">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="text-sm font-semibold text-slate-500">{item.phase}</span>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.statusColor}`}>
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                                    <p className="text-sm text-sky-500 font-semibold mb-4">{item.period}</p>
                                                    <p className="text-slate-700 leading-relaxed text-lg">{item.description}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Center Dot */}
                                        <div className={`flex-shrink-0 w-20 h-20 rounded-full ${item.statusColor} flex items-center justify-center z-10 shadow-xl`}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>

                                        {/* Right Side (Text on right for odd indices) */}
                                        <div className="flex-1">
                                            {!isLeftAligned && (
                                                <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 hover:shadow-xl shadow-lg shadow-sky-100 transition-all">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="text-sm font-semibold text-slate-500">{item.phase}</span>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.statusColor}`}>
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                                    <p className="text-sm text-sky-500 font-semibold mb-4">{item.period}</p>
                                                    <p className="text-slate-700 leading-relaxed text-lg">{item.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-white/90 border border-blue-200 rounded-2xl p-8 shadow-lg">
                        <p className="text-slate-800 text-lg font-semibold mb-2">
                            Long-Term Vision: A Viable, Sustainable Project
                        </p>
                        <p className="text-slate-700">
                            MyHealth is designed to grow with the community, adapting to emerging health needs and technological advancements.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
