import React, { createContext, useContext, useState } from "react";
import whiteLogo from "../assets/img/logo-white.png";
import ChooseQuiz from "./ChooseQuiz";

const AppContext = createContext();

const Home = () => {
  const { setIsGoClicked } = useContext(AppContext);

  // const handleClickGo = () => {
  //   setIsGoClicked(true);
  // };

  return (
    <div id="home-container">
      <div className="home-logo">
        <img src={whiteLogo} alt="" />
      </div>
      <div>
        <h1>
          teste ta culture de gamer <span>!</span>
        </h1>
      </div>
      <div className="go-btn" onClick={() => setIsGoClicked(true)}>
        <p>go</p>
      </div>
    </div>
  );
};

const App = () => {
  const [isGoClicked, setIsGoClicked] = useState(false);

  return (
    <AppContext.Provider value={{ isGoClicked, setIsGoClicked }}>
      {isGoClicked ? <ChooseQuiz /> : <Home />}
    </AppContext.Provider>
  );
};

export default App;
