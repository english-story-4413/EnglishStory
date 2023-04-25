import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import $ from 'jquery'
import Title from './Title';
import Story from './Story';

const textRoot = ReactDOM.createRoot( document.getElementById("text") );

function App() {

  const [titles] = useState([
    {
      title: "The beginning of a legend",
      id: "1-1"
    }
  ]);

  function showText(id, title){
    import("./Stories/" + id + ".json").then(data => {
      console.log(data);
      textRoot.render(<Story data={data} title={title} />);
      $("#root").attr("style", "display: none;");
      $("#text").attr("style", "display: block;");
    })
  }

  return (
    <ul>
      {titles.map((title, index) => <Title key={index} title={title} show={showText} />)}
    </ul>
  );
}

export default App;
