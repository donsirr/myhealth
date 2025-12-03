'use client';

import Link from 'next/link';
import { useLifeQR } from './lifeqr-provider';

export default function Navbar() {
    const { openModal } = useLifeQR();

    return (
        <nav className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-lg">+</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
                            MyHealth
                        </span>
                    </Link>

                    {/* Emergency Button */}
                    <button
                        onClick={openModal}
                        className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                    >
                        🚑 Emergency LifeQR
                    </button>
                </div>
            </div>
        </nav>
    );
}
