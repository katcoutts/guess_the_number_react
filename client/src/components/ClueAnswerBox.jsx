var React = require('react');

var ClueAnswerBox = function( props ) {

  console.log("props.response of ClueAnswerBox is", props.response)

  if(!props.response){
    return <h4>  </h4>
  }



  return (
    <h2 id="clue-response">{props.response}</h2>
  )


}

module.exports = ClueAnswerBox;






