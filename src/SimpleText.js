import React from 'react'

const SimpleText = ({id, text, clicked}) => {

  function clickedText(){
    clicked(id);
  }

  return (
    <>
      {(text === "<br>" || text === "&lt;br&gt;") && <br />}
      {!["<br>", "&lt;br&gt;"].includes(text) && <span onClick={clickedText}>{text}{String.fromCharCode(32)}</span>}
    </>
  )
}

export default SimpleText