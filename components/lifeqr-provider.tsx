'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import LifeQRModal from './lifeqr-modal';

interface LifeQRContextType {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const LifeQRContext = createContext<LifeQRContextType | undefined>(undefined);

export function useLifeQR() {
    const context = useContext(LifeQRContext);
    if (!context) {
        throw new Error('useLifeQR must be used within LifeQRProvider');
    }
    return context;
}

export default function LifeQRProvider({ children }: { children: ReactNode }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <LifeQRContext.Provider value={{ showModal, openModal, closeModal }}>
            {children}
            <LifeQRModal isOpen={showModal} onClose={closeModal} />
        </LifeQRContext.Provider>
    );
}
