import React, { useState } from 'react';

import media1 from './media/media1.png'; import media2 from './media/media2.png'; import media3 from './media/media3.png'; import media4 from './media/media4.png'; import media5 from './media/media5.png'; import media6 from './media/media6.png'; import media7 from './media/media7.png'; import media8 from './media/media8.png'; import media9 from './media/media9.png'; import media10 from './media/media10.png'; import media11 from './media/media11.png'; import media12 from './media/media12.png'; import media13 from './media/media13.png'; import media14 from './media/media14.png'; import media15 from './media/media15.png'; import media16 from './media/media16.png'; import media17 from './media/media17.png'; import media18 from './media/media18.png'; import media19 from './media/media19.png'; import media20 from './media/media20.png'; import media21 from './media/media21.png'; import media22 from './media/media22.png'; import media23 from './media/media23.png'; import media24 from './media/media24.png'; import media25 from './media/media25.png'; import media26 from './media/media26.png'; import media27 from './media/media27.png'; import media28 from './media/media28.png'; import media29 from './media/media29.png'; import media30 from './media/media30.png'; import media31 from './media/media31.png'; import media32 from './media/media32.png'; import media33 from './media/media33.png'; import media34 from './media/media34.png'; import media35 from './media/media35.png'; import media36 from './media/media36.png'; import media37 from './media/media37.png'; import media38 from './media/media38.png'; import media39 from './media/media39.png'; import media40 from './media/media40.png'; import media41 from './media/media41.png'; import media42 from './media/media42.png'; import media43 from './media/media43.png'; import media44 from './media/media44.png'; import media45 from './media/media45.png';

import sound from '../src/an_other_one.mp3';

const audio = new Audio(sound);

const amountOfImages = 45; // Set this to the number of images you have

const images = [media1, media2, media3, media4, media5, media6, media7, media8, media9, media10, media11, media12, media13, media14, media15, media16, media17, media18, media19, media20, media21, media22, media23, media24, media25, media26, media27, media28, media29, media30, media31, media32, media33, media34, media35, media36, media37, media38, media39, media40, media41, media42, media43, media44, media45];


function RandomImageDisplay() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [buttonText, setButtonText] = useState("Show me a picture");

    const getRandomIndex = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * amountOfImages);
        } while (randomIndex === currentIndex);
        return randomIndex;
    };

    const showNewImage = () => {
        if (currentIndex) audio.play();
        const newIndex = getRandomIndex();
        setCurrentIndex(newIndex);
        setButtonText("Another one");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "16px" }}>
            {currentIndex !== null && (
                <img
                    src={images[currentIndex]}
                    alt="Random"
                    style={{
                        maxWidth: "95vw",
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        maxHeight: "80vh"
                    }}
                />
            )}
            <button
                onClick={showNewImage}
                style={{
                    padding: "15px 30px",
                    fontSize: "18px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "20px"
                }}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default RandomImageDisplay;