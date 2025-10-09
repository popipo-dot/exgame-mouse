import { Context, Next } from "koa";

const Logger = async (ctx: Context, next: Next) => {
  const start = Date.now();

  // LOG INIZIALE: Registra che la richiesta è arrivata.
  console.log(`[REQUEST START] ${ctx.method} ${ctx.url}`);

  // Attende l'esecuzione di tutto il codice a valle (middleware e handler di rotta).
  await next();

  const ms = Date.now() - start;

  // LOG FINALE: Registra che la risposta è stata inviata e la durata.
  console.log(`[REQUEST END] ${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
};

export default Logger;
