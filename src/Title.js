import React from 'react'

const Title = ({title, show}) => {

  function showTitle(){
    show(title.id, title.eng);
  }

  return (
    <li>{title.num && title.num + " "}<span className="title-list" onClick={showTitle}>{title.eng}[{title.jp}]</span></li>
  )
}

export default Title