import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
        <section className={styles.hero}>
            <div className={styles.iframeWrapper}>
                <iframe
                    title="CN Tower - Photogrammetry"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="false"
                    webkitallowfullscreen="false"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/5bed064f0f934eb9ad7bb845f15879c7/embed?autospin=1&autostart=1&camera=0&preload=1&transparent=1&ui_controls=0&ui_infos=0&camera=0.8"
                    width={window.innerWidth/2}
                    height={window.innerHeight}
                ></iframe>
            </div>
            <div className={styles.heroText}>
              <h2 className={styles.heroTextName}>Joseph Mi</h2>
              <p className={styles.heroTextDesc}>University of Toronto Engineering</p>
            </div>
        </section>
    </div>
  );
};

export default Home;