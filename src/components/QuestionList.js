import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionsArr }) {
  const questionItems = questionsArr.map(question => {
    return <QuestionItem question={question}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
