import originalStyles from './GlowingBorderCard.module.css';
import React from 'react';

export type Props = {
    children: React.ReactNode,
    additionalStyles?: string
};

export default function GlowingBorderCard({ children, additionalStyles }: Props) {
    return (
        <div className={`${originalStyles['glowing-border-card']} ${additionalStyles}`}>
            {children}
        </div>
    );
};