import React from 'react'

const Word = ({word}) => {
  return (
    <tr><td>{word.word}</td><td>：</td><td>{word.mean}</td></tr>
  )
}

export default Word