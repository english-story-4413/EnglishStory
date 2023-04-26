import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import $ from 'jquery'
import Title from './Title';
import Story from './Story';
import titleData from './Titles.json'

const textRoot = ReactDOM.createRoot( document.getElementById("text") );

function App() {

  const titles = titleData.titles

  function showText(id, title){
    import("./Stories/" + id + ".json").then(data => {
      textRoot.render(<Story data={data} title={title} />);
      $("#root").attr("style", "display: none;");
      $("#text").attr("style", "display: block;");
    })
  }

  return (
    <ul>
      {titles.map((title, index1) => {
        if (title.id) {
          return <Title key={index1} title={title} show={showText} />;
        } else{
          return <>
            <li>{title.eng}[{title.jp}]</li>
            <li className={"no-dot"}><ul>
            {title.children.map((child, index2) => <Title key={index1 + "-" +index2} title={child} show={showText} />)}
            </ul></li>
          </>
        }
      })}
    </ul>
  );
}

export default App;
