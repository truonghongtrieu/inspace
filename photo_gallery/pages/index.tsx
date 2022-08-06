import PhotoGallery from '../components/photo_gallery';
import { GetStaticProps } from 'next';
import { photos } from '../repository/photos';
import styles from '../components/layout.module.css';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.galleryTitle}>Welcome to our Photo Galery</div>

      <PhotoGallery
        galleryPhotos={photos}>
      </PhotoGallery>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
