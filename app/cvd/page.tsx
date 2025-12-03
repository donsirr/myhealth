'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Brain, Zap } from 'lucide-react';
import RiskResultModal from '@/components/risk-result-modal';

type DiseaseType = 'cardiovascular' | 'stroke' | 'heartattack' | null;

interface QuestionField {
    id: string;
    label: string;
    type: 'number' | 'radio';
    options?: Array<{ value: string; label: string }>;
    min?: number;
    max?: number;
    step?: string;
    points: { [key: string]: number };
}

const questionBank: Record<string, QuestionField[]> = {
    cardiovascular: [
        {
            id: 'age',
            label: 'Age',
            type: 'number',
            min: 0,
            max: 120,
            points: { '>50': 2 },
        },
        {
            id: 'smoker',
            label: 'Do you smoke?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
            ],
            points: { yes: 4, no: 0 },
        },
        {
            id: 'bmi',
            label: 'BMI (Body Mass Index)',
            type: 'number',
            min: 0,
            max: 120,
            step: '0.1',
            points: { '>30': 3 },
        },
        {
            id: 'activityLevel',
            label: 'Physical Activity Level',
            type: 'radio',
            options: [
                { value: 'sedentary', label: 'Sedentary (Little to no exercise)' },
                { value: 'moderate', label: 'Moderate (Exercise 1-3 times/week)' },
                { value: 'active', label: 'Active (Exercise 4+ times/week)' },
            ],
            points: { sedentary: 3, moderate: 1, active: 0 },
        },
    ],
    stroke: [
        {
            id: 'age',
            label: 'Age',
            type: 'number',
            min: 0,
            max: 120,
            points: { '>50': 2 },
        },
        {
            id: 'highBloodPressure',
            label: 'Do you have high blood pressure?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
                { value: 'unknown', label: 'Unknown' },
            ],
            points: { yes: 5, no: 0, unknown: 1 },
        },
        {
            id: 'heartRhythm',
            label: 'Do you experience irregular heartbeat or palpitations?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
            ],
            points: { yes: 4, no: 0 },
        },
        {
            id: 'diabetes',
            label: 'Do you have diabetes?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
            ],
            points: { yes: 3, no: 0 },
        },
    ],
    heartattack: [
        {
            id: 'age',
            label: 'Age',
            type: 'number',
            min: 0,
            max: 120,
            points: { '>50': 2 },
        },
        {
            id: 'chestPain',
            label: 'Have you experienced chest pain or discomfort?',
            type: 'radio',
            options: [
                { value: 'frequent', label: 'Frequently' },
                { value: 'occasional', label: 'Occasionally' },
                { value: 'never', label: 'Never' },
            ],
            points: { frequent: 5, occasional: 2, never: 0 },
        },
        {
            id: 'cholesterol',
            label: 'Do you have high cholesterol?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
                { value: 'unknown', label: 'Unknown' },
            ],
            points: { yes: 4, no: 0, unknown: 1 },
        },
        {
            id: 'familyHistory',
            label: 'Family history of heart disease?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
            ],
            points: { yes: 3, no: 0 },
        },
    ],
};

export default function CVDPage() {
    const [selectedDisease, setSelectedDisease] = useState<DiseaseType>(null);
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState<{
        level: 'low' | 'moderate' | 'high';
        score: number;
    } | null>(null);

    const diseases = [
        {
            id: 'cardiovascular' as const,
            title: 'Cardiovascular Health',
            description: 'Assess overall heart health and disease risk',
            icon: Heart,
            gradient: 'from-red-500 to-pink-600',
        },
        {
            id: 'stroke' as const,
            title: 'Stroke Risk',
            description: 'Evaluate your risk factors for stroke',
            icon: Brain,
            gradient: 'from-purple-500 to-indigo-600',
        },
        {
            id: 'heartattack' as const,
            title: 'Heart Attack',
            description: 'Calculate heart attack probability',
            icon: Zap,
            gradient: 'from-orange-500 to-red-600',
        },
    ];

    const calculateRisk = () => {
        if (!selectedDisease) return;

        const questions = questionBank[selectedDisease];
        let points = 0;

        questions.forEach((question) => {
            const value = formData[question.id];
            if (!value) return;

            if (question.type === 'number') {
                const numValue = parseFloat(value);
                if (numValue < 0 || numValue > (question.max || 120)) return;

                // Check numeric conditions
                Object.keys(question.points).forEach((condition) => {
                    if (condition.startsWith('>')) {
                        const threshold = parseFloat(condition.substring(1));
                        if (numValue > threshold) {
                            points += question.points[condition];
                        }
                    }
                });
            } else if (question.type === 'radio') {
                points += question.points[value] || 0;
            }
        });

        let level: 'low' | 'moderate' | 'high';
        if (points <= 4) {
            level = 'low';
        } else if (points <= 8) {
            level = 'moderate';
        } else {
            level = 'high';
        }

        setResult({ level, score: points });
        setShowModal(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        calculateRisk();
    };

    const getDiseaseTitle = () => {
        const disease = diseases.find((d) => d.id === selectedDisease);
        return disease?.title || '';
    };

    const currentQuestions = selectedDisease ? questionBank[selectedDisease] : [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12">
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
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Health Risk Assessment</h1>
                    <p className="text-xl text-slate-600">
                        Choose your focus area and complete the assessment
                    </p>
                </div>

                {/* Step 1: Disease Selection */}
                {!selectedDisease ? (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                            Step 1: Select Assessment Type
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {diseases.map((disease) => {
                                const Icon = disease.icon;
                                return (
                                    <button
                                        key={disease.id}
                                        onClick={() => setSelectedDisease(disease.id)}
                                        className="group text-left"
                                    >
                                        <div className="bg-white/95 border border-sky-200 rounded-3xl p-8 hover:border-sky-500 hover:shadow-xl shadow-lg shadow-sky-100 transition-all duration-300 transform hover:-translate-y-2">
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-br ${disease.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-3">{disease.title}</h3>
                                            <p className="text-slate-600">{disease.description}</p>
                                            <div className="mt-6 text-sky-500 font-semibold inline-flex items-center">
                                                Select
                                                <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    /* Step 2: Dynamic Question Form */
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-slate-800">
                                Step 2: Risk Assessment - {getDiseaseTitle()}
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedDisease(null);
                                    setFormData({});
                                }}
                                className="text-sky-500 hover:text-sky-600 font-semibold"
                            >
                                ← Change Selection
                            </button>
                        </div>

                        <div className="bg-white/95 border border-sky-200 rounded-3xl p-8 shadow-lg shadow-sky-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {currentQuestions.map((question) => (
                                    <div key={question.id}>
                                        <label className="block text-base font-semibold text-slate-800 mb-3">
                                            {question.label}
                                        </label>

                                        {question.type === 'number' ? (
                                            <input
                                                type="number"
                                                value={formData[question.id] || ''}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    const numValue = parseFloat(value);
                                                    // Prevent negative and out-of-range values
                                                    if (value === '' || (numValue >= 0 && numValue <= (question.max || 120))) {
                                                        setFormData({ ...formData, [question.id]: value });
                                                    }
                                                }}
                                                min={question.min}
                                                max={question.max}
                                                step={question.step || '1'}
                                                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg text-slate-800 placeholder:text-gray-400 focus:placeholder-transparent"
                                                placeholder={`Enter ${question.label.toLowerCase()}`}
                                                required
                                            />
                                        ) : (
                                            <div className="flex flex-col gap-3">
                                                {question.options?.map((option) => (
                                                    <label key={option.value} className="relative cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name={question.id}
                                                            value={option.value}
                                                            checked={formData[question.id] === option.value}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, [question.id]: e.target.value })
                                                            }
                                                            className="peer sr-only"
                                                            required
                                                        />
                                                        <div className="px-6 py-4 border-2 border-slate-200 rounded-xl peer-checked:border-sky-500 peer-checked:bg-sky-50 transition-all text-left font-semibold text-slate-700 peer-checked:text-sky-700">
                                                            {option.label}
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-lg"
                                >
                                    Analyze Risk
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            {/* Risk Result Modal */}
            {result && (
                <RiskResultModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    riskLevel={result.level}
                    riskScore={result.score}
                    diseaseType={getDiseaseTitle()}
                />
            )}
        </div>
    );
}
