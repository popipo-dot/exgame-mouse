import mongoose from "mongoose";

interface Iexam {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    created_by: string;
    schedule_date: Date;
    max_time: number;
    question: Iquestion[]
}

interface Iquestion {
    _id: string;
    text: string;
    type: "multiple_choice";
    answers: Ianswer[];
}

interface Ianswer {
    _id: string;
    answer: string;
    isCorrect: boolean;
}


const examSchema = new mongoose.Schema<Iexam>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    created_by: { type: String, required: true },
    schedule_date: { type: Date, default: Date.now },
    max_time: { type: Number, required: true },
    question: { type: [questionSchema], required: true},
});

const questionSchema = new mongoose.Schema<Iquestion>({
    _id: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    type: { type: String, enum: ["multiple_choice"] },
    answers: { type: [answerSchema], required: true},
});

const answerSchema = new mongoose.Schema<Ianswer>({
    _id: { type: String, required: true, unique: true },
    answer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
});

const userModel = mongoose.model<Iexam>("Exam", examSchema);

export default examModel;