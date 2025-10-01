import { useState } from "react";
import type { QuestionType } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";

type QuestionList = {
  questionsList: QuestionType[];
};

const QuestionList = ({ questionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    console.log(
      "Lo stato che stai inviando è:\n",
      JSON.stringify(responses, null, 2),
    );
    // Qui potresti inviare le risposte a un server o fare altre azioni
  };

  return (
    <div className="QuestionList">
      {questionsList.map((Question, idx) => (
        <QuestionComponent
          key={idx}
          question={Question.question}
          answers={Question.answers}
          response={responses[idx]}
          setReponse={(value: string) => {
            setResponses({ ...responses, [idx]: value });
            console.log(
              "Hai selezionato: ",
              value,
              "devo inserire questo valore nella domanda: ",
              idx,
            );
          }}
        />
      ))}

      <div className={classes.actions}>
        <button className={classes.submit} onClick={handleSubmit}>
          Consegna
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
