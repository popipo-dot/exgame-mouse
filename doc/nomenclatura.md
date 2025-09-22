# Nomenclatura

- **Teacher**: rappresenta l'utenza di un docente, che può gestire studenti, esami e subscription
- **Student**: rappresenta l'utenza di uno studente, che può partecipare a un esame tramite una Subscription
- **Exam**: rappresenta un esame, è associato a un Teacher, contiene un oggetto di configurazione (n. copie ammesse, n. disturbi ammessi, tempo di esecuzione previsto...) e una collection di Questions (ciascuna Question contiene a sua volta una collection di Answers)
- **Question**: rappresenta una domanda, contiene un elenco di Answer
- **Answer**: rappresenta una opzione di risposta ad una domanda, contiene anche l'informazione **correct** per indicare la risposta esatta
- **Subscription**: rappresenta l'iscrizione (associazione) di uno studente ad un esame, contiene tutte le Response che lo studente ha dato, le azioni di copia e disturbo che ha fatto durante la prova, le domande fatte al docente, ecc.
- **Response**: rappresenta una risposta data da uno studente ad una domanda, è associata ad una Answer (probabilmente conterrà anche un'associazione alla relativa Question)

## Attenzione

Chiariamo la differenza tra **Answer** e **Response**:

- Answer rappresenta le opzioni di una domanda ("Question")
- Response rappresenta un'answer scelta da un utente per rispondere a una domanda. In pratica, una response è una "crocetta" su una answer
