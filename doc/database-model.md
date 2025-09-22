# Modellazione dei dati

![](./assets/database-model.png)

Il database (MongoDB) contiene 5 collections:

- **Users**: account degli utenti (studenti, docenti, admin). L'utente admin è un docente con più permessi.
- **Exams**: elenco degli esami. Ogni esame contiene tutta la struttura dati necessaria: configurazione, domande e risposte, data di svolgimento, ecc. Se un docente vuole riproporre un esame, lo dovrà duplicare con l'apposita funzione.
- **Subscriptions**: elenco dei delle prove d'esame svolte dagli studenti. Ogni subscription contiene tutti i dati della prova: risposte date, azioni di disturbo compiute, domande al docente, ecc.
