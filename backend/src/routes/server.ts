import Router from "@koa/router";
import { exams } from "../mocks/exams";

const router = new Router({
  prefix: "/server",
});

router.get("/check", async (ctx) => {
  ctx.body = "Check ok!";
  ctx.status = 200;
});

router.get("/exams", async (ctx) => {
  try {
    ctx.body = exams;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore nel recupero degli esami" };
  }
});

router.get("/exams/:id", async (ctx) => {
  const { id } = ctx.params;

  const exam = exams.find((e) => e._id === id);

  if (exam?._id === id) {
    ctx.body = exam;
    ctx.status = 200;
  } else {
    ctx.status = 404;
    ctx.body = { error: `Exam with id ${id} not found` };
  }
});

router.post("/exams/new", async (ctx) => {
  try {
    const newExam = ctx.request.body;
    exams.push(newExam);
    ctx.status = 201;
    ctx.body = newExam;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "errore durante la creazione" };
  }
});

router.patch("/exams/update/:id", async (ctx) => {
  const { id } = ctx.params;
  const exam = exams.find((e) => e._id === id);

  try {
    if (exam?._id === id) {
      const updatedExam = ctx.request.body;
      ctx.status = 202;
      ctx.body = updatedExam;
    } else {
      ctx.status = 404;
      ctx.body = { error: "Esame non trovato!" };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "errore durante l'aggiornamento" };
  }
});

router.delete("/exams/:id", async (ctx) => {
  const { id } = ctx.params;
  const index = exams.findIndex((e)=> e._id===id);

  try{
    exams.splice(index, 1)[0];
    ctx.status=200;
    ctx.body={message: "esame elimnato!"}
  }catch (error){
    ctx.status=500;
    ctx.body = { error: "errore durante l'eliminazione" };
  }
});
export default router;
