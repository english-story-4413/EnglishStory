import React from 'react'

const CommentaryDetail = ({commentary, index}) => {
  return (
    <div>
        <h3><span className={"twice"}>Point {index} </span>{commentary.title}</h3>
        <p>{commentary.content}</p>
    </div>
  )
}

export default CommentaryDetail