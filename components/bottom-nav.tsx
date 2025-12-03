'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Activity, Map, CreditCard } from 'lucide-react';

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/cvd', icon: Activity, label: 'Health' },
        { href: '/dengue', icon: Map, label: 'Dengue' },
        { href: '/passport/edit', icon: CreditCard, label: 'LifeQR' },
    ];

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-md md:opacity-50 md:hover:opacity-100 md:hover:scale-105 md:transition-all md:duration-300">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-sky-500/10 px-6 py-4">
                <div className="flex items-center justify-around">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex flex-col items-center gap-1 transition-all duration-200 ${isActive ? 'text-sky-500' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <div
                                    className={`p-2 rounded-2xl transition-all ${isActive ? 'bg-sky-500/10 scale-110' : 'hover:bg-slate-100'
                                        }`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
