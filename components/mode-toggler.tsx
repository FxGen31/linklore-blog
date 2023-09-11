'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Button to toggle light/dark theme
export default function ModeToggler() {
    const { setTheme, theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState('light');

    // Delay rendering any theme toggling UI until mounted on the client to be hydration safe
    useEffect(() => {
        if (theme) setCurrentTheme(theme);
    }, [theme]);

    const toggleTheme = () => {
        if (currentTheme === 'light') {
            setTheme('dark');
        } else if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('system');
        }
    };

    return (
        <Button variant='ghost' size='icon' onClick={toggleTheme}>
            {currentTheme === 'light' ? (
                <SunIcon className='w-6 h-6' aria-hidden />
            ) : (
                <MoonIcon className='w-6 h-6' aria-hidden />
            )}
            <span className='sr-only'>Toggle dark theme</span>
        </Button>
    );
}
