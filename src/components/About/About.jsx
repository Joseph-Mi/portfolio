import React, { useEffect } from "react";
import styles from "./About.module.scss";
import { getImageUrl } from "../../utils/utils";

const About = () => {
    const images = [
        { src: getImageUrl("about/vb.png"), alt: "VB" },
        { src: getImageUrl("about/utsm.png"), alt: "UTSM" },
        { src: getImageUrl("about/utfr.png"), alt: "UTFR" },
        { src: getImageUrl("about/praxis2.png"), alt: "Praxis2" },
        { src: getImageUrl("about/praxis1.png"), alt: "Praxis1" },
        { src: getImageUrl("about/plane.png"), alt: "Plane" },
        { src: getImageUrl("about/opamp.png"), alt: "Opamp" },
        { src: getImageUrl("about/motor.png"), alt: "Motor" },
        { src: getImageUrl("about/makeathon.png"), alt: "Makeathon" },
        { src: getImageUrl("about/htg.png"), alt: "HTG" },
        { src: getImageUrl("about/esec.png"), alt: "ESEC" },
        { src: getImageUrl("about/eclipse.png"), alt: "Eclipse" },
        { src: getImageUrl("about/ece.png"), alt: "ECE" },
        { src: getImageUrl("about/davis.png"), alt: "Davis" },
        { src: getImageUrl("about/cordage.png"), alt: "Cordage" },
        { src: getImageUrl("about/carshop.png"), alt: "Carshop" },
        { src: getImageUrl("about/car.png"), alt: "Car" },
        { src: getImageUrl("about/calcs.png"), alt: "Calcs" },
        { src: getImageUrl("about/cad.png"), alt: "CAD" },
        { src: getImageUrl("about/bridge.png"), alt: "Bridge" },
        { src: getImageUrl("about/blockhacks.png"), alt: "Blockhacks" },
        { src: getImageUrl("about/aurora.png"), alt: "Aurora" },
        { src: getImageUrl("about/asc.png"), alt: "ASC" },
        { src: getImageUrl("about/arduino.png"), alt: "Arduino" },
        { src: getImageUrl("about/alignment.png"), alt: "Alignment" },
        { src: getImageUrl("about/bcg.png"), alt: "BCG" }
    ];

    useEffect(() => {
        const imageWrapper = document.querySelector(`.${styles.imageWrapper}`);
        const imageItems = document.querySelectorAll(`.${styles.imageWrapper} > div`);
        const imageLength = imageItems.length;
        const perView = 4;
        let totalScroll = 0;
        const delay = 2000;

        if (imageWrapper) {
            imageWrapper.style.setProperty('--per-view', perView);
        }

        for (let i = 0; i < perView; i++) {
            imageWrapper.appendChild(imageItems[i].cloneNode(true));
        }

        let autoScroll = setInterval(scrolling, delay);

        function scrolling() {
            totalScroll++;
            const widthEl = document.querySelector(`.${styles.imageWrapper} > div`).offsetWidth + 24;
            imageWrapper.style.transform = `translateX(-${totalScroll * widthEl}px)`;
            imageWrapper.style.transition = 'transform .5s';

            if (totalScroll === imageLength) {
                setTimeout(() => {
                    imageWrapper.style.transition = 'none';
                    imageWrapper.style.transform = 'translateX(0)';
                    totalScroll = 0;
                    setTimeout(() => {
                        imageWrapper.style.transition = 'transform .5s';
                    }, 50);
                }, 500);
            }
        }

        return () => clearInterval(autoScroll);
    }, []);

    return (
        <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img className={styles.aboutImage} src={img.src} alt={img.alt} />
                    </div>
                ))}
            </div>
            <div className={styles.aboutme}>
                <div className={styles.overview}>
                    <h3>About Me &#128512;</h3>
                    <br />
                    <p>
                        Hi! My name is Joseph, and I'm an Engineering Science student at the University of Toronto, especially interested in concepts relating to electronics, electromagnetism, and energy. Life to me is the rich intertwining of innovation, community, nature, and perpetual learning. It's the constant pursuit of knowledge and technological advancement, balanced with an appreciation for what nature presently offers. This very notion has driven me towards Engineering, a practice that explores natural sciences and mathematics to solve real, tangible problems.
                        <br />
                        <br />
                        <hr />
                        <br />
                        As a student engineer, my overarching goal is to leverage my passion for electronics, electromagnetism, and energy to contribute meaningfully to the advancement of technology and society. I aspire to delve deeper into research and innovation, exploring emerging fields such as renewable energy, sustainable technology, computational electronics, and artificial intelligence.
                        <br />
                        <br />
                        Currently, I'm deeply involved in several university design teams like UTFR(Formula Racing) and UTSM (Super Mileage), where I've honed my skills in firmware development and innovative electronic solutions. Furthermore, my passion for technology got a practical boost during my full-stack developer internship at ConfiDens Analytics. There, I tackled complex projects using Vue, VueX, Laravel, and Bootstrap. I thrive in fast-paced, collaborative environments and have participated in numerous hackathons like Hack the Globe, MakeUofT, McMaster's Admissions Case Competition, BlockHacks 2024, and UofTHacks, where I've developed rapid, innovative solutions to a variety of challenges.
                        <br />
                        <br />
                        Aside from engineering, I'm an avid reader, a student athlete, and a nature enthusiast. Some of my favourite reads include 'All the Light We Cannot See', 'The Ballad of Songbirds and Snakes', and 'Flowers for Algernon'. I am also a member of a few SKULE intramural teams, including volleyball and frisbee. 
                        <br />
                        <br />
                    </p>
                </div>
                <div className={styles.overview}>
                    <h3>Key Skills and Values &#128170;</h3>
                </div>
                <div className={styles.values}>
                    <h3>Creativity and Innovation &#129504;:</h3>
                    <p>My creativity and innovation have been fostered through participation in hackathons and university design teams, where I constantly push the boundaries to develop unique, impactful solutions to complex problems.</p>
                </div>
                <div className={styles.values}>
                    <h3>Continuous Growth and Learning &#128214;:</h3>
                    <p>My passion for continuous growth and learning drives me to seek out new experiences, from delving into advanced electromagnetism research to adopting new technologies like Vue and Laravel.</p>
                </div>
                <div className={styles.values}>
                    <h3>Embracing Failures &#128201;:</h3>
                    <p>Embracing failures is integral to my learning process. Each setback in design projects or hackathons has been an opportunity to reflect, iterate, and ultimately emerge stronger and more knowledgeable.</p>
                </div>
                <div className={styles.values}>
                    <h3>Teamwork and Communication &#129309;:</h3>
                    <p>Effective teamwork and communication are vital to my success in collaborative environments like UTFR and ConfiDens Analytics. Working cohesively with peers and mentors enhances the development process and results in superior outcomes.</p>
                </div>
            </div>
        </div>
    );
}

export default About;