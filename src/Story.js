import React from 'react';
import ReactDOM from 'react-dom/client';
import Commentary from './Commentary';
import $ from 'jquery'
import SimpleText from './SimpleText';

const commentaryRoot = ReactDOM.createRoot( $("#commentary").get(0) );

const Story = ({data, title}) => {

    function addCommentary(id){
      commentaryRoot.render(
        <React.StrictMode>
          <Commentary text={data.texts[id]} />
        </React.StrictMode>
      );
      $("#commentary").attr("style", "height: 100vh; padding: 10px;");
    }

    function closeStory() {
      $("#root").attr("style", "");
      $("#text").attr("style", "display: none;");
    }
  
    return (
      <>
        <p width="100%" align="right"><button onClick={closeStory}>タイトルに戻る</button></p>
        <h1>{title}</h1>
        {data.texts.map((text, index) => <SimpleText id={index} text={text.text} clicked={addCommentary} key={index} />)}
      </>
    );
}

export default Story