import React from 'react'

const Title = ({title, show}) => {

  function showTitle(){
    show(title.id, title.title);
  }

  return (
    <li><span onClick={showTitle}>{title.title}</span></li>
  )
}

export default Title