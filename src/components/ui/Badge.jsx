import React from 'react';

const Badge = ({ children, className = '' }) => {
    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-azure/10 text-cyan border border-azure/20 ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
