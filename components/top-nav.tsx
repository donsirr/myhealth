'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, QrCode } from 'lucide-react';

export default function TopNav() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/passport/edit', icon: QrCode, label: 'LifeQR' },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl shadow-sky-500/10 px-8 py-3">
                <div className="flex items-center gap-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200 ${isActive
                                        ? 'bg-sky-500 text-white'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
