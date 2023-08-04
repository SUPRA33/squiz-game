import callOfDutyImg from "../assets/img/games-logo/call-of-duty.png";
import valorantImg from "../assets/img/games-logo/valorant.png";
import assassinsCreedImg from "../assets/img/games-logo/assassins-creed.png";

const ChooseQuiz = () => {
  const games = [
    {
      id: 1,
      name: "Call of Duty",
      text: "Mets tes connaissances sur la saga Call Of Duty à l'épreuve !",
      image: callOfDutyImg,
    },
    {
      id: 2,
      name: "Valorant",
      text: "Tu crois tous savoir sur Valorant ? Lances toi et vérifies tes connaissances !",
      image: valorantImg,
    },
    {
      id: 3,
      name: "Assassins Creed",
      text: "La saga Assassins Creed n'a plus de secret pour toi ? Essayes de relever ce défi haut la main !",
      image: assassinsCreedImg,
    },
  ];

  return (
    <>
      <div className="game-wish-container">
        <div className="game-wish-banner">
          <p>
            Sur quel jeu souhaites-tu te tester <span>?</span>
          </p>
        </div>
        {games.map((game) => (
          <div className="game-wish-item" key={game.id}>
            <div className="game-img">
              <img src={game.image} alt={`logo de ${game.name}`} />
            </div>
            <div className="game-wish-description">
              <p>{game.name}</p>
              <p>{game.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChooseQuiz;
