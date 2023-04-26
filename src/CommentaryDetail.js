import React from 'react'

const CommentaryDetail = ({commentary, index}) => {
  return (
    <div>
        <h3>Point<span className={"twice"}>{index}</span>  | {commentary.title}</h3>
        <p>{commentary.content.split("\n").map((line) => <>{line}<br/></>)}</p>
    </div>
  )
}

export default CommentaryDetail