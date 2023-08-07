import React, { createContext, useContext, useState, useEffect } from "react";

import classNames from "classnames";

import ChooseQuiz from "./ChooseQuiz";
import QuizCOD from "./QuizCOD";

const AppContext = createContext();

const RenderQuestions = () => {
  const { setIsPreviousBtnClicked } = useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    // sélectionne une question au hasard depuis QuizCOD
    const randomIndex = Math.floor(Math.random() * QuizCOD.length);
    setRandomQuestion(QuizCOD[randomIndex]);
  }, []);

  const handleSelect = (itemIndex) => {
    setSelectedItem(itemIndex);
    setSelectedProposal(
      randomQuestion.proposals.find((proposal) => proposal.id === itemIndex)
    );
  };

  //gestion du score
  let score = 0;

  // vérifie si la réponse est correcte ou non
  const handleCheckResponse = () => {
    if (selectedProposal) {
      if (selectedProposal.response === true) {
        setIsAnswerCorrect(true);
        score += 1;
      } else {
        setIsAnswerCorrect(true);
      }
    } else {
      return null;
    }
    console.log(score);
  };

  if (!randomQuestion) {
    return null; // Attendre jusqu'à ce qu'une question soit sélectionnée au hasard
  }

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
          {randomQuestion.question} <span>?</span>
        </p>
      </div>
      <div className="proposals">
        <ul>
          {randomQuestion.proposals.map((proposal) => {
            const isSelected = selectedItem === proposal.id;
            const isCorrect = proposal.response === true;
            const isIncorrect = proposal.response === false;
            const shouldColorCorrect = isAnswerCorrect && isCorrect;
            const shouldColorIncorrect = isAnswerCorrect && isIncorrect;

            return (
              <li
                key={proposal.id}
                onClick={() => handleSelect(proposal.id)}
                className={classNames({
                  // application des classes
                  //application de la classe selected lorsque je clique sur un li
                  selected: isSelected && !isAnswerCorrect,
                  //application de la classe correct ou incorrect quand je clique sur le bouton OK
                  correct: shouldColorCorrect && isCorrect,
                  incorrect: isSelected && shouldColorIncorrect && isIncorrect,
                })}
              >
                {proposal.proposal}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="btn" onClick={handleCheckResponse}>
        <p>OK</p>
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
