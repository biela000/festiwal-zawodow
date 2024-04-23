import styles from './Logo.module.css';

export type Props = {
    src: string;
    alt: string;
};

export default function Logo({ src, alt }: Props) {
    return <img className={styles.logo} src={src} alt={alt} />
}