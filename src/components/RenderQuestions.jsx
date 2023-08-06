import React, { createContext, useContext, useState } from "react";

import ChooseQuiz from "./ChooseQuiz";
import QuizCOD from "./QuizCOD";

const AppContext = createContext();

const RenderQuestions = () => {
  const { setIsPreviousBtnClicked } = useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  return (
    <div className="question-container">
      <div className="question-banner">
        <div
          className="previous-btn"
          onClick={() => setIsPreviousBtnClicked(true)}
        >
          <i className="fa-solid fa-chevron-left" />
        </div>
        <p className="quiz-title">Call Of Duty</p>
        <p>
          Quel opus de la série n'a pas fait son apparition sur PC{" "}
          <span>?</span>
        </p>
      </div>
      <div className="proposals">
        <ul>
          <li
            onClick={() => handleSelect(1)}
            className={selectedItem === 1 ? "selected" : null}
          >
            Call Of Duty - La grande offensive
          </li>
          <li
            onClick={() => handleSelect(2)}
            className={selectedItem === 2 ? "selected" : null}
          >
            Call Of Duty - En marche vers Paris
          </li>
          <li
            onClick={() => handleSelect(3)}
            className={selectedItem === 3 ? "selected" : null}
          >
            Call Of Duty - Advanced Warfare
          </li>
          <li
            onClick={() => handleSelect(4)}
            className={selectedItem === 4 ? "selected" : null}
          >
            Call Of Duty 2
          </li>
        </ul>
      </div>
      <div className="next-question-btn">
        <p>Suivant &#62;</p>
      </div>
    </div>
  );
};

const App = () => {
  const [isPreviousBtnClicked, setIsPreviousBtnClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{ isPreviousBtnClicked, setIsPreviousBtnClicked }}
    >
      {isPreviousBtnClicked ? <ChooseQuiz /> : <RenderQuestions />}
    </AppContext.Provider>
  );
};

export default App;

// export default RenderQuestions;
