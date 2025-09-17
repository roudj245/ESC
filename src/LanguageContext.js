// contexts/LanguageContext.js
import { useState, createContext, useContext } from 'react';

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'EN' ? 'AR' : 'EN');
        // Apply RTL direction for Arabic
        document.documentElement.dir = language === 'EN' ? 'rtl' : 'ltr';
        document.documentElement.lang = language === 'EN' ? 'ar' : 'en';
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};