import GlowingBorderCard from '../GlowingBorderCard/GlowingBorderCard.tsx';
import styles from './GalleryItem.module.css';

export type Props = {
    title: string;
    imgSrc: string;
    imgSrcActive: string;
    url: string;
};

export default function GalleryItem({ title, imgSrc, url }: Props) {
    return (
        <GlowingBorderCard additionalStyles={styles['gallery-item']}>
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <a href={url} target="_blank" rel="noreferrer" />
        </GlowingBorderCard>
    );
}