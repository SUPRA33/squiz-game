import whiteLogo from "../assets/img/logo-white.png";

const Home = () => {
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
      <div className="go-btn">
        <p>go</p>
      </div>
    </div>
  );
};

export default Home;
