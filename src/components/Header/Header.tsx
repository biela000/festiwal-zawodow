import Logo from '../Logo/Logo.tsx';
import styles from './Header.module.css';
import GlowingBorderCard from '../GlowingBorderCard/GlowingBorderCard.tsx';

export default function Header() {
    return (
        <GlowingBorderCard additionalStyles={styles.header}>
            <Logo src='/zsl.png' alt='ZSŁ' />
            <Logo src='/malopolska_zawodowa.png' alt='Małopolska Zawodowa' />
        </GlowingBorderCard>
    );
};