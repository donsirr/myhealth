'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface PassportData {
    fullName: string;
    emergencyContact: string;
    bloodType: string;
    allergies: string;
}

interface PassportContextType {
    passportData: PassportData;
    updatePassportData: (data: PassportData) => void;
    hasPassport: boolean;
}

const defaultPassportData: PassportData = {
    fullName: '',
    emergencyContact: '',
    bloodType: '',
    allergies: '',
};

const PassportContext = createContext<PassportContextType | undefined>(undefined);

export function usePassport() {
    const context = useContext(PassportContext);
    if (!context) {
        throw new Error('usePassport must be used within PassportProvider');
    }
    return context;
}

export default function PassportProvider({ children }: { children: ReactNode }) {
    const [passportData, setPassportData] = useState<PassportData>(defaultPassportData);
    const [hasPassport, setHasPassport] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('myhealth-passport');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setPassportData(parsed);
                setHasPassport(true);
            } catch (e) {
                console.error('Failed to parse passport data:', e);
            }
        }
    }, []);

    const updatePassportData = (data: PassportData) => {
        setPassportData(data);
        setHasPassport(true);
        localStorage.setItem('myhealth-passport', JSON.stringify(data));
    };

    return (
        <PassportContext.Provider value={{ passportData, updatePassportData, hasPassport }}>
            {children}
        </PassportContext.Provider>
    );
}
