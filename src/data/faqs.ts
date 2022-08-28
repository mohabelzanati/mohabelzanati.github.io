export interface FAQItem {
  id: number;
  title: string;
  body: string[] | string;
  type: "ol" | "ul" | "text";
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    title: "titleQ1",
    body: [
      "answerQ1L1",
      "answerQ1L2",
      "answerQ1L3",
      "answerQ1L4",
      "answerQ1L5",
      "answerQ1L6",
      "answerQ1L7",
    ],
    type: "ol",
  },
  {
    id: 2,
    title: "titleQ2",
    body: ["answerQ2L1", "answerQ2L2", "answerQ2L3"],
    type: "ol",
  },
  {
    id: 3,
    title: "titleQ3",
    type: "text",
    body: "answerQ3L1",
  },
  {
    id: 4,
    type: "text",
    title: "titleQ4",
    body: "answerQ4L1",
  },
  {
    id: 5,
    type: "ul",
    title: "titleQ5",
    body: ["answerQ5L1", "answerQ5L2", "answerQ5L3", "answerQ5L4"],
  },
  {
    id: 6,
    type: "ul",
    title: "titleQ6",
    body: ["answerQ6L1", "answerQ6L2", "answerQ6L3"],
  },
];
