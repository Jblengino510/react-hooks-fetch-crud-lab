import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const questionUrl = "http://localhost:4000/questions"

function App() {
  const [page, setPage] = useState("List");
  const [ questionsArr, setQuestionsArr] = useState([])

  useEffect(() => {
    fetch(questionUrl)
    .then(res => res.json())
    .then(questions => setQuestionsArr(questions))
  }, [])

  console.log(questionsArr)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questionsArr={questionsArr}/>}
    </main>
  );
}

export default App;
