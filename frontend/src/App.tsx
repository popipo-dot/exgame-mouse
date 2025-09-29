import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import ChipList from "./ChipList/ChipList";
import ClockComponent from "./Clock/ClockComponent";
import Description from "./Description/Description";
import QuestionList from "./QuestionList/QuestionList";
import UserInfoComponent from "./UserInfo/UserInfoComponent";

function App() {
  const chips = [
    { type: "date", testo: "12 settembre 2025" },
    { type: "session", testo: "prima sessione" },
    { type: "teacher", testo: "Prof.Bianchi" },
  ];

  const questions = [
    {
      question: "Qual è la capitale della Francia",
      answers: ["Parigi", "Lione", "Marsiglia", "Nizza"],
    },
    {
      question: "Chi ha scritto 'La Divina Commedia'",
      answers: ["Dante Alighieri", "Petrarca", "Boccaccio", "Manzoni"],
    },
    {
      question: "Qual è il pianeta più vicino al Sole",
      answers: ["Mercurio", "Venere", "Terra", "Marte"],
    },
    {
      question: "In che anno è iniziata la Seconda Guerra Mondiale",
      answers: ["1939", "1914", "1945", "1929"],
    },
    {
      question: "Qual è la formula chimica dell’acqua",
      answers: ["H2O", "CO2", "O2", "NaCl"],
    },
    {
      question: "Chi dipinse la Gioconda",
      answers: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Caravaggio"],
    },
    {
      question: "Qual è la montagna più alta del mondo",
      answers: ["Everest", "K2", "Kangchenjunga", "Makalu"],
    },
    {
      question: "Quanti sono i pianeti del Sistema Solare",
      answers: ["8", "7", "9", "10"],
    },
    {
      question: "Qual è la lingua più parlata al mondo",
      answers: ["Cinese mandarino", "Inglese", "Spagnolo", "Hindi"],
    },
    {
      question: "Chi ha inventato il telefono",
      answers: ["Alexander Graham Bell", "Edison", "Marconi", "Tesla"],
    },
  ];
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <a href="">
            <img src={Logo} alt="" className={styles.logo} />
          </a>
          <ul>
            <li>
              <a href="#" className={styles.sx}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className={styles.sx}>
                Esami
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <a href="#" className={styles.dx}>
                Albe Molon
              </a>
            </li>
            <li>
              <a href="#" className={styles.dx}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.main}>
        <div className={styles.content}>
          <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>

          <Description classe="1A" tipoDiTest="Matematica"></Description>
          <ChipList chips={chips}></ChipList>
          <ClockComponent tempo={7200}></ClockComponent>
          <QuestionList QuestionsList={questions} />
        </div>
      </div>
    </>
  );
}

export default App;
