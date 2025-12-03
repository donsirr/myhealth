'use client';

import Link from 'next/link';
import { ArrowLeft, Brain, Heart, Thermometer, Baby } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IdentifyHubPage() {
    const tools = [
        {
            id: 'stroke',
            title: 'Stroke',
            subtitle: 'Brain Emergency',
            description: 'F.A.S.T. symptom identification',
            icon: Brain,
            color: 'bg-purple-500',
            borderColor: 'border-purple-200',
            hoverBorder: 'hover:border-purple-500',
            textColor: 'text-purple-500',
            shadowColor: 'shadow-purple-100',
            href: '/identify/stroke',
        },
        {
            id: 'heart',
            title: 'Heart Attack',
            subtitle: 'Cardiac Emergency',
            description: 'Recognize heart attack signs',
            icon: Heart,
            color: 'bg-red-500',
            borderColor: 'border-red-200',
            hoverBorder: 'hover:border-red-500',
            textColor: 'text-red-500',
            shadowColor: 'shadow-red-100',
            href: '/identify/heart',
        },
        {
            id: 'dengue',
            title: 'Dengue',
            subtitle: 'Fever & Warning Signs',
            description: 'Identify dengue symptoms',
            icon: Thermometer,
            color: 'bg-orange-500',
            borderColor: 'border-orange-200',
            hoverBorder: 'hover:border-orange-500',
            textColor: 'text-orange-500',
            shadowColor: 'shadow-orange-100',
            href: '/identify/dengue',
        },
        {
            id: 'child',
            title: 'Child Emergency',
            subtitle: 'Pediatric Alerts',
            description: 'Common child emergencies',
            icon: Baby,
            color: 'bg-teal-500',
            borderColor: 'border-teal-200',
            hoverBorder: 'hover:border-teal-500',
            textColor: 'text-teal-500',
            shadowColor: 'shadow-teal-100',
            href: '/identify/child',
        },
    ];

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Emergency Identification Tools</h1>
                    <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
                        Select an emergency type to learn how to identify critical symptoms
                    </p>
                </motion.div>

                {/* Tool Cards - 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;

                        return (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={tool.href} className="group block h-full">
                                    <div className={`h-full bg-white/80 backdrop-blur-sm border-4 ${tool.borderColor} ${tool.hoverBorder} rounded-3xl p-10 hover:shadow-xl shadow-lg ${tool.shadowColor} transition-all duration-300 transform hover:-translate-y-2`}>
                                        <div className="flex flex-col items-center text-center space-y-6">
                                            <div className={`w-32 h-32 ${tool.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl`}>
                                                <Icon className="w-16 h-16 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-slate-800 mb-1">{tool.title}</h3>
                                                <p className={`text-lg font-semibold ${tool.textColor} mb-3`}>{tool.subtitle}</p>
                                                <p className="text-slate-700 text-lg">
                                                    {tool.description}
                                                </p>
                                            </div>
                                            <div className="w-full pt-4 border-t-2 border-slate-200">
                                                <span className={`${tool.textColor} font-bold text-xl inline-flex items-center`}>
                                                    Start Tool
                                                    <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 text-center"
                >
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>Disclaimer:</strong> These tools are for educational identification only.{' '}
                        <strong className="text-red-600">When in doubt, call emergency services immediately.</strong>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
