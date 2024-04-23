import ShowcaseProjects from '../../data/ShowcaseProjects.ts';
import GalleryItem from '../GalleryItem/GalleryItem.tsx';
import styles from './Gallery.module.css';

export default function Gallery() {
    const galleryItems = ShowcaseProjects.map(({ title, imgSrc, imgSrcActive, url }) => (
        <GalleryItem
            key={title}
            title={title}
            imgSrc={imgSrc}
            imgSrcActive={imgSrcActive}
            url={url}
        />
    ));

    return (
        <div className={styles.gallery}>
            {galleryItems}
        </div>
    );
}