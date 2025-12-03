'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, ChevronDown, ChevronUp, MapPin, Clock, FileText, Stethoscope, Activity, ShieldCheck, Phone } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    tags: string[];
    date: string;
    time: string;
    location: string;
    icon: any;
    description: string;
    requirements: string[];
    color: string;
}

export default function ScreeningPage() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const services: Service[] = [
        {
            id: 1,
            title: 'Cervical Cancer Screening',
            tags: ['Free', 'Women 21+'],
            date: 'October 12, 2024',
            time: '8:00 AM - 4:00 PM',
            location: 'City Health Office, Naga City',
            icon: Stethoscope,
            description:
                'Free Pap smear and HPV testing for early detection of cervical cancer. Early detection saves lives.',
            requirements: ['Valid ID', 'PhilHealth card (if available)', 'Appointment preferred but walk-ins accepted'],
            color: 'from-purple-500 to-pink-600',
        },
        {
            id: 2,
            title: 'Prostate Health Check',
            tags: ['Men 50+', 'Free Consultation'],
            date: 'October 15-16, 2024',
            time: '9:00 AM - 3:00 PM',
            location: 'Naga City Hall Main Lobby',
            icon: Activity,
            description:
                'Comprehensive prostate screening including PSA test and digital rectal examination for men over 50.',
            requirements: ['Valid government ID', 'Medical history form', 'Fasting for 8 hours before test'],
            color: 'from-blue-500 to-cyan-600',
        },
        {
            id: 3,
            title: 'HIV/AIDS Anonymous Test',
            tags: ['Private', 'Walk-in', 'Free'],
            date: 'Available Daily',
            time: 'Monday - Friday: 9:00 AM - 5:00 PM',
            location: 'Social Hygiene Clinic, Naga City',
            icon: ShieldCheck,
            description:
                'Confidential and anonymous HIV testing with same-day results. Counseling services available.',
            requirements: ['No ID required', 'Anonymous testing', 'Free counseling included'],
            color: 'from-green-500 to-emerald-600',
        },
    ];

    const toggleCard = (id: number) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

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
                        <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">Wellness & Cancer Screening</h1>
                    <p className="text-xl text-slate-600">
                        Free health screenings and preventive care services for all Nagueños
                    </p>
                </div>

                {/* Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl overflow-hidden hover:border-sky-500 hover:shadow-xl transition-all duration-300 ${expandedCard === service.id ? 'md:col-span-2 lg:col-span-3' : ''
                                }`}
                        >
                            {/* Card Header */}
                            <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/20`}>
                                        {(() => {
                                            const Icon = service.icon;
                                            return <Icon className="w-8 h-8 text-white" />;
                                        })()}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-white/90">{service.description}</p>
                            </div>

                            {/* Card Body */}
                            <div className="p-6">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-slate-500 font-semibold">Date</p>
                                            <p className="text-slate-900">{service.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-slate-500 font-semibold">Time</p>
                                            <p className="text-slate-900">{service.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-slate-500 font-semibold">Location</p>
                                            <p className="text-slate-900">{service.location}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable Details */}
                                {expandedCard === service.id && (
                                    <div className="mt-6 pt-6 border-t-2 border-slate-200">
                                        <div className="flex items-center gap-2 mb-4">
                                            <FileText className="w-5 h-5 text-slate-700" />
                                            <h4 className="font-bold text-slate-900">Requirements</h4>
                                        </div>
                                        <ul className="space-y-2 mb-6">
                                            {service.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-slate-700">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                                            Book Appointment
                                        </button>
                                    </div>
                                )}

                                {/* Toggle Details Button */}
                                <button
                                    onClick={() => toggleCard(service.id)}
                                    className="w-full mt-4 flex items-center justify-center gap-2 text-sky-500 hover:text-sky-600 font-semibold py-2 transition-colors"
                                >
                                    {expandedCard === service.id ? (
                                        <>
                                            <span>Hide Details</span>
                                            <ChevronUp className="w-5 h-5" />
                                        </>
                                    ) : (
                                        <>
                                            <span>View Details</span>
                                            <ChevronDown className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Banner */}
                <div className="bg-white/90 border border-blue-200 rounded-2xl shadow-lg p-8 text-center space-y-3 mt-12">
                    <p className="text-slate-800 text-lg font-semibold">Need More Information?</p>
                    <p className="text-slate-700">
                        Contact the Naga City Health Office for inquiries about available services and eligibility.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5 text-sky-500" />
                        <span className="text-slate-800 font-semibold">(054) 473-2326</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
