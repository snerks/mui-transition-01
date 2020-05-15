interface Question {
  questionNumber: number;
  imageFileName: string;
}

export type QuestionsInfo = Question[];

const questions: Question[] = [
  { questionNumber: 1, imageFileName: "B1" },
  { questionNumber: 2, imageFileName: "C1" },
  { questionNumber: 3, imageFileName: "D1" },
  { questionNumber: 4, imageFileName: "E1" },
  { questionNumber: 5, imageFileName: "F1" },
  { questionNumber: 6, imageFileName: "G1" },
  { questionNumber: 7, imageFileName: "O1" },
  { questionNumber: 8, imageFileName: "S1" },
  { questionNumber: 9, imageFileName: "S2" },
  { questionNumber: 10, imageFileName: "T1" },
];

export default questions;
