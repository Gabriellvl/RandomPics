import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import './App.css';
import brief from './brief.txt'
import HiddenValue from "./HiddenValue";
import RandomImageDisplay from "./RandomImageDisplay";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [briefText, setBriefText] = useState("");

  const dates = [
        new Date('2024-08-12'),
        new Date('2024-10-30'),
        new Date('2024-12-31')
  ];


    useEffect(() => {
    fetch(brief)
        .then(response => response.text())
        .then(text => setBriefText(text));
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

    function daysUntilNextDate() {
        const today = new Date();
        let closestFutureDate = null;

        for (const date of dates) {
            if (date > today) {
                if (closestFutureDate === null || date < closestFutureDate) {
                    closestFutureDate = date;
                }
            }
        }

        if (closestFutureDate) {
            const timeDifference = closestFutureDate - today;
            return Math.ceil(timeDifference / (1000 * 3600 * 24));
        } else {
            return 69;
        }
    }


    return (
      <div className="App">
        <h1>
            Welkom bij lil Jerre's afscheids website
        </h1>
        <button
            onClick={openModal}
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
          Open je brief
        </button>
        <Modal show={showModal} onClose={closeModal} content={briefText} />
        <br/>
        <HiddenValue text={"Days until next meet up with pookie 🥰"} value={daysUntilNextDate()}/>
          <br/>
          <RandomImageDisplay/>
      </div>
  );
}

export default App;
