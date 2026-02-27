import React from 'react';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-blue-500 animate-spin" />
                <div className="absolute inset-2 rounded-full border-r-2 border-b-2 border-orange-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
            </div>
            <p className="text-sm font-medium animate-pulse" style={{ color: 'var(--text-secondary)' }}>
                Loading experience...
            </p>
        </div>
    );
}
