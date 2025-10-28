import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type {
  AnswerId,
  QuestionId,
  SubscriptionQuestion,
  SubscriptionType,
} from "../../../../api/types";
import { SocketIoContext } from "../socketio/SocketIoContext";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType } from "./types";

type QuestionList = {
  questionsList: QuestionType[]; // ATTENZIONE: QuestionType è cambiato!
};

const QuestionList = ({ questionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<QuestionId, AnswerId>>({});
  const navigate = useNavigate();
  const socketContext = useContext(SocketIoContext);
  const socket = socketContext.socket;
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    socket?.emit("updateResponses", responses);
  }, [socket, responses]);

  useEffect(() => {
    socket?.on("copy", (data) => {
      console.log(data);
      if (data) {
        setResponses(data);
      }
    });

    return () => {
      socket?.off("copy");
    };
  }, [socket]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    socket?.on("disturb", () => {
      setShaking(true);
      timer = setTimeout(() => setShaking(false), 1000);
    });

    return () => {
      if (timer) clearTimeout(timer);
      socket?.off("disturb");
    };
  }, [socket]);

  const handleSubmit = () => {
    console.log(
      "Lo stato che stai inviando è:\n",
      JSON.stringify(responses, null, 2),
    );
    // Qui potresti inviare le risposte a un server o fare altre azioni

    // L'api richiede un oggetto di tipo SubscriptionType, trasformo la variabile di stato `responses` in questo oggetto:
    const requestBody: Omit<SubscriptionType, "status" | "grade"> = {
      _id: "subscription_id_example",
      exam_id: "exam_id_example",
      student_id: "student_id_example",
      questions: Object.entries(responses) //
        // {"questionId": "answerId", "questionId": "answerId"} ->
        // [[questionId, answerId], [questionId, answerId], ...]
        .map(
          ([questionId, answerId]) =>
            ({
              question_id: questionId,
              responses: [{ answer_id: answerId }],
            }) as SubscriptionQuestion,
        ),
    };

    // Invio l'oggetto al server
    fetch("http://localhost:3000/api/subscriptions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).finally(() => {
      navigate("/");
    });

    // ... quello che scrivo qui viene eseguito dopo aver chiamato l'api, ma PRIMA che arrivi la risposta
  };

  if (questionsList.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <div className="QuestionList">
      {questionsList.map((question, i) => (
        <QuestionComponent
          key={i}
          question={question}
          response={responses[question._id] || ""}
          shake={shaking}
          setResponse={(value: string) => {
            setResponses({ ...responses, [question._id]: value });
            console.log(
              "Hai selezionato: ",
              value,
              "devo inserire questo valore nella domanda: ",
              question._id,
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
