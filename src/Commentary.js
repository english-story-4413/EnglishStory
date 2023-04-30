import React from 'react'
import $ from 'jquery'
import Word from './Word';
import CommentaryDetail from './CommentaryDetail';
import "./Commentary.css"

const Commentary = ({text}) => {

    function deleteCommentary() {
        $("#commentary").attr("style", "display: none;");
        $("#text").attr("style", "");
    }

    return (
        <>
            <p className='title-btn-p'><button onClick={deleteCommentary}>解説を閉じる</button></p>
            <h2 className={"center"}>{text.text}</h2>
            <div className={"inline"}>
                <div id="words">
                    <h3>単語・熟語</h3>
                    <table>
                        <tbody>
                            {text.commentary.words.map((word,index) => <Word word={word} key={index}/>)}
                        </tbody>
                    </table>
                </div>
                <div id="comments">
                    {text.commentary.commentaries.map((commentary, index) => <CommentaryDetail commentary={commentary} index={index + 1} key={index}/>)}
                </div>
            </div>
            <div className="nill"></div>
            <h1>和訳</h1>
            <p className={"center"}>{text.jp}</p>
        </>
    )
}

export default Commentary