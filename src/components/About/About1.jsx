import React, { useEffect, useState, useRef } from "react";
import styles from "./About.module.scss";
import { getImageUrl } from "../../utils/utils";

const About = () => {
    const vbImage = getImageUrl("about/vb.png");
    const utsmImage = getImageUrl("about/utsm.png");
    const utfrImage = getImageUrl("about/utfr.png");
    const praxis2Image = getImageUrl("about/praxis2.png");
    const praxis1image = getImageUrl("about/praxis1.png");
    const planeImage = getImageUrl("about/plane.png");
    const opampImage = getImageUrl("about/opamp.png");
    const motorImage = getImageUrl("about/motor.png");
    const makeathonImage = getImageUrl("about/makeathon.png");
    const htgImage = getImageUrl("about/htg.png");
    const esecImage = getImageUrl("about/esec.png");
    const eclipseImage = getImageUrl("about/eclipse.png");
    const eceImage = getImageUrl("about/ece.png");
    const davisImage = getImageUrl("about/davis.png");
    const cordageImage = getImageUrl("about/cordage.png");
    const carshopImage = getImageUrl("about/carshop.png");
    const carImage = getImageUrl("about/car.png");
    const calcsImage = getImageUrl("about/calcs.png");
    const cadImage = getImageUrl("about/cad.png");
    const bridgeImage = getImageUrl("about/bridge.png");
    const blockhacksImage = getImageUrl("about/blockhacks.png");
    const auroraImage = getImageUrl("about/aurora.png");
    const ascImage = getImageUrl("about/asc.png");
    const arduinoImage = getImageUrl("about/arduino.png");
    const alignmentImage = getImageUrl("about/alignment.png");
    const bcgImage = getImageUrl("about/bcg.png");

    const imageWrapperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: vbImage, alt: "VB" },
        { src: utsmImage, alt: "UTSM" },
        { src: utfrImage, alt: "UTFR" },
        { src: praxis2Image, alt: "Praxis2" },
        { src: praxis1image, alt: "Praxis1" },
        { src: planeImage, alt: "Plane" },
        { src: opampImage, alt: "Opamp" },
        { src: motorImage, alt: "Motor" },
        { src: makeathonImage, alt: "Makeathon" },
        { src: htgImage, alt: "HTG" },
        { src: esecImage, alt: "ESEC" },
        { src: eclipseImage, alt: "Eclipse" },
        { src: eceImage, alt: "ECE" },
        { src: davisImage, alt: "Davis" },
        { src: cordageImage, alt: "Cordage" },
        { src: carshopImage, alt: "Carshop" },
        { src: carImage, alt: "Car" },
        { src: calcsImage, alt: "Calcs" },
        { src: cadImage, alt: "CAD" },
        { src: bridgeImage, alt: "Bridge" },
        { src: blockhacksImage, alt: "Blockhacks" },
        { src: auroraImage, alt: "Aurora" },
        { src: ascImage, alt: "ASC" },
        { src: arduinoImage, alt: "Arduino" },
        { src: alignmentImage, alt: "Alignment" },
        { src: bcgImage, alt: "BCG" },
    ];

    const totalImages = images.length;
    const delay = 2000; // Delay in milliseconds

    useEffect(() => {
        const imageWrapper = imageWrapperRef.current;

        const scrollInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex + 1) % (totalImages + 1);
            });
        }, delay);

        // Clean up the interval on unmount
        return () => clearInterval(scrollInterval);
    }, [totalImages]);

    useEffect(() => {
        if (currentIndex >= totalImages) {
            // When the last "fake" first image is reached, reset to the true first image without animation
            const timer = setTimeout(() => {
                imageWrapperRef.current.style.transition = '0.3s';
                setCurrentIndex(0);
            }, delay);
            return () => clearTimeout(timer);
        } else {
            // Restore the transition if it was previously removed
            imageWrapperRef.current.style.transition = '';
        }
    }, [currentIndex, totalImages, delay]);

    return (
        <div className={styles.container}>
            <div className={styles.slideshow} ref={imageWrapperRef}>
                
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.carouselItem}
                        style={{ transform: `translateX(-${currentIndex * 105}%)` }}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <div className={styles.values}>
                {/* Add content here */}
            </div>
            <iframe
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/0f5f0b1f-4f4d-4c2e-9b7f-3d4f4f3a7f3c">
            </iframe>
        </div>
        
    );
}

export default About;
