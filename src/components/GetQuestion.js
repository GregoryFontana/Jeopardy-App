import { useState, useEffect } from "react";
// import react from "react";

const GetQuestion = (props) => {
  const url = "https://jservice.io/api/random";

  
  const [question, setQuestion] = useState(null);


  const [score, setScore] = useState(0);

  const getQuestion = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data) {
        setQuestion(data);
      }
      setTextHidden("false");
      console.log();
    } catch (e) {
      console.error(e);
    }
  };

const handleIncrease = () => {
    setScore(score + question[0].value);
  };

  const handleDecrease = () => {
    setScore(score - question[0].value);
  };

  const handleReset = () => {
    setScore(0);
  };


  const [isTextHidden, setTextHidden] = useState(true);

  const onClick = () => setTextHidden(!isTextHidden);
  

  const Text = () => <div>Answer: {question[0].answer}</div>;

  const targetDiv = document.querySelector("answertoggle");
 
  return (
    <div>
      <h1>Score: {score}</h1>
      <button className="increase" onClick={handleIncrease}>
        Increase
      </button>
      <button className="decrease" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      <br />
      <br />
      <br />
      <button onClick={getQuestion} className="getquestion">
        Get Question
      </button>
      <br />
      <br />
      <h2 className="question">
        {question == null ? "" : question[0].question}
      </h2>
      <h2 className="category">
        Category:{" "}
        <span className="categoryTitle">
          {question == null ? "" : question[0].category.title}
        </span>
      </h2>
      < h3 className="point">
        Point Value:{" "}
        {question == null ?  "" : question[0].value}
        
      </h3>
      <h2 className="answer">{!isTextHidden ? <Text /> : null}</h2>
      <h2 className="answerTitle">Answer: </h2>
      <button className="showAnswer" onClick={onClick}>
        {isTextHidden ? "Show Answer" : "Hide Answer"}
      </button>
      <br />
        
    </div>
  );
};

export default GetQuestion;