import React from 'react'

const SimpleText = ({id, text, clicked}) => {

  function clickedText(){
    clicked(id);
  }

  return (
    <>
      {text === "<br>" && <br />}
      {text !== "<br>" && <span onClick={clickedText}>{text}{String.fromCharCode(32)}</span>}
    </>
  )
}

export default SimpleText